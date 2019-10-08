exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('comments').insert([
    {
      post_id: 1,
      user_id: 2,
      content:
        'YEA, I THINK THAT WOULD BE GREAT. WOULD I BE ABLE TO BRING A GUEST ???',
    },
  ])
}
