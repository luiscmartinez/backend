function createLikes(tbl) {
  tbl.increments()
  tbl.string('entity_type')
  tbl.integer('type_id')
  tbl
    .integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
  tbl.timestamps(true, true)
}

module.exports = createLikes
