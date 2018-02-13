exports.seed = function(knex, Promise) {
  return knex("users")
    .del() // Deletes ALL existing entries
    .then(function() {
      // Inserts seed entries one by one in series
      return knex("users").insert({
        email: 'qss@q.com',
        password: "test"
      });
    })
    .then(function() {
      return knex("users").insert({
        email: "qsss@q.com",
        password: "test"
      });
    })
    .then(function() {
      return knex("users").insert({
        email: "qs@q.com",
        password: "test"
      });
    })
    .then(function() {
      return knex("users").insert({
        email: "q@q.com",
        password:
          "$2a$10$ZsiuQ6udd6GN81AGdiICYOZeYN0H3vxU7sNh7FwtWCMj1KDZCbqYu"
      });
    });
};