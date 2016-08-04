
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('todo_table').insert({task: 'finish code'}),
        knex('todo_table').insert({task: 'submit code'}),
        knex('todo_table').insert({task: 'do neext code'})
      ])
    })
}
