
exports.up = function (knex, Promise) {
  return Promise.join(
    knex.schema.createTable('todos', function (table) {
      table.string('todo_table')
      table.timestamps()
    })
  )
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('todos')
  ])
}
