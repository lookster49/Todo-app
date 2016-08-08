
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo_item').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('todo_item').insert({task: 'finish code'}),
        knex('todo_item').insert({task: 'submit code'}),
        knex('todo_item').insert({task: 'do neext code'})
      ])
    })
}
