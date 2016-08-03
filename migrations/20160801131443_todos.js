
exports.up = function (knex, Promise) {
  return Promise.join(
    knex.schema.createTableIfExists('todos', function(table) {
      table.increments('id').primary()
      table.string('todos_table')
      table.timestamps()
    })
  )
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('todos_table')
  ])

}
