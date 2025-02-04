require('dotenv').config
const express = require('express')
const Users = require('../models/users')
const GroupsUsers = require('../models/groups_users')
const UsersAllegiances = require('../models/users_allegiances')
const axios = require('axios')
const router = express.Router()

router.route('/').post(async (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({
      error: `Error during ${req.method} at ${req.originalUrl}: email is required.`,
    })
  }
  // Check if email of user exists to decide whether to create new user
  const currentUser = await Users.find({ email: req.body.email }).first()
  if (currentUser) {
    // Check if current user is a member of any groups
    const userGroups = await GroupsUsers.find({ user_id: currentUser.id })
    // Check if current user is a member of any allegiances
    const userAllegiances = await UsersAllegiances.find({
      user_id: currentUser.id,
    })
    let basicGroupInfo = []
    let basicAllegianceInfo = []
    if (userGroups) {
      // If user is a member of groups, map group info to conform names to front end component structure
      basicGroupInfo = userGroups.map(group => {
        return {
          name: group.name,
          image: group.group_image,
          id: group.group_id,
          user_type: group.user_type,
        }
      })
    }
    if (userAllegiances) {
      // If user is a member of allegiances, map allegiance info to conform names to front end component structure
      basicAllegianceInfo = userAllegiances.map(allegiance => {
        return {
          name: allegiance.allegiance_name,
          image: allegiance.allegiance_image,
          id: allegiance.allegiance_id,
        }
      })
    }
    // Return user, group, and allegiance information
    const userInfo = { currentUser, basicGroupInfo, basicAllegianceInfo }
    return res.status(200).json({ userInfo })
  } else {
    const response = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: process.env.AUTH0_SERVER + '/',
        grant_type: 'client_credentials',
      },
      { headers: { 'content-type': 'application/json' } }
    )

    const userProfileResponse = await axios.get(
      `${process.env.AUTH0_SERVER}/users-by-email?email=${req.body.email}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${response.data.access_token}`,
        },
      }
    )

    const {
      email,
      family_name,
      given_name,
      nickname,
      picture,
      last_ip,
      identities,
    } = userProfileResponse.data[0]
    const ipApiResponse = await axios.get(`http://ip-api.com/json/${last_ip}`)

    const userData = {
      username: nickname,
      email,
      location: ipApiResponse.data.zip || null,
      image: picture,
      first_name: given_name || null,
      last_name: family_name || null,
    }
    const newUser = await Users.add(userData)
    const userInfo = { newUser }

    res.status(201).json({ userInfo })
  }
})

module.exports = router
