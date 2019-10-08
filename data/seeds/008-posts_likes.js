exports.seed = function(knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex('likes').insert([{ user_id: 1, entity_type: 'post', type_id: 1 }])
}
