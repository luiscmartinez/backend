function createTeam_Members(tbl) {
  tbl.increments()

  tbl
    .integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  tbl
    .integer('team_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('teams')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  tbl.unique(['user_id', 'team_id'])
}
module.exports = createTeam_Members
