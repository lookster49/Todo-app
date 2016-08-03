
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos_table').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('todos_table').insert({id: 1, colName: 'rowValue1'}),
        knex('todos_table').insert({id: 2, colName: 'rowValue2'}),
        knex('todos_table').insert({id: 3, colName: 'rowValue3'})
      ]);
    });
};
