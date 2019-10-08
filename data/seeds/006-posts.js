exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('posts').insert([
    {
      user_id: 1,
      group_id: 1,
      content:
        'SAW THE GAME AT THE HOMIES PAD WOW WHAT A GAME! GO TEAM. LOTS OF BEER HERE & FOOD & AWESOME SPORTS PEOPLE. IM THINKING OF CREATING AN EVENT HERE AND ALL OF YALL WOULD BE INVITED. ILL BE SENDING OUT THE POLL LATER. WHAT DO YOU GUYS THINK ??????',
      title: 'WHAT A WIN',
    },
  ])
}
