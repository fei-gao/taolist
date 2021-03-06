const bcrypt = require('bcrypt');

exports.seed = function seed(knex, Promise) {
  return knex('user', 'list', 'item').del()
    .then(() => {
      return Promise.all([
        knex('user').insert({ username: 'Alice', password: bcrypt.hashSync('password', 10), email: 'fake@gmail.com' }),
        knex('user').insert({ username: 'Bob', password: bcrypt.hashSync('password', 10), email: 'faker@gmail.com' }),
        knex('user').insert({ username: 'Charlie', password: bcrypt.hashSync('password', 10), email: 'McFakeFuck@hotmail.com' }),
        knex('list').insert({ user_id: 1, name: 'To Watch' }),
        knex('list').insert({ user_id: 1, name: 'To Eat' }),
        knex('list').insert({ user_id: 1, name: 'To Read' }),
        knex('list').insert({ user_id: 1, name: 'To Buy' }),
        knex('list').insert({ user_id: 1, name: 'Finished' }),
        knex('list').insert({ user_id: 2, name: 'To Watch' }),
        knex('list').insert({ user_id: 2, name: 'To Eat' }),
        knex('list').insert({ user_id: 2, name: 'To Read' }),
        knex('list').insert({ user_id: 2, name: 'To Buy' }),
        knex('list').insert({ user_id: 2, name: 'Finished' }),
        knex('list').insert({ user_id: 3, name: 'To Watch' }),
        knex('list').insert({ user_id: 3, name: 'To Eat' }),
        knex('list').insert({ user_id: 3, name: 'To Read' }),
        knex('list').insert({ user_id: 3, name: 'To Buy' }),
        knex('list').insert({ user_id: 3, name: 'Finished' }),
        knex('item').insert({ user_id: 1, name: 'Harry Potter', list_id: 1 }),
        knex('item').insert({ user_id: 1, name: 'Lord of the Rings', list_id: 1 }),
        knex('item').insert({ user_id: 1, name: 'City of Stairs', list_id: 1 }),
        knex('item').insert({ user_id: 1, name: 'Wutang at Shaolin', list_id: 2 }),
        knex('item').insert({ user_id: 1, name: 'Harry Potter', list_id: 2 }),
        knex('item').insert({ user_id: 1, name: 'Lord of the Rings', list_id: 2 }),
        knex('item').insert({ user_id: 1, name: 'Ten Foot Henry', list_id: 3 }),
        knex('item').insert({ user_id: 1, name: 'Gorilla Whale', list_id: 3 }),
        knex('item').insert({ user_id: 1, name: 'Two Penny', list_id: 3 }),
        knex('item').insert({ user_id: 1, name: 'iPhone 10', list_id: 4 }),
        knex('item').insert({ user_id: 1, name: 'Nintendo Switch', list_id: 4 }),
        knex('item').insert({ user_id: 1, name: 'Barbour Jacket', list_id: 4 }),
      ]);
    });
};
