exports.seed = function(knex, Promise) {
  return knex("users")
    .del() // Deletes ALL existing entries
    .then(function() {
      // Inserts seed entries one by one in series
      return knex("users").insert({
        first_name: "JP",
        last_name: "Dunlop",
        email: 'qss@q.com',
        password: "test"
      });
    })
    .then(function() {
      return knex("users").insert({
        first_name: "Parker",
        last_name: "Ray",
        email: "qsss@q.com",
        password: "test"
      });
    })
    .then(function() {
      return knex("users").insert({
        first_name: "Steve",
        last_name: "Reichheld",
        email: "qs@q.com",
        password: "test"
      });
    })
    .then(function() {
      return knex("users").insert({
        first_name: "a",
        last_name: "a",
        email: "q@q.com",
        password:
          "$2a$10$ZsiuQ6udd6GN81AGdiICYOZeYN0H3vxU7sNh7FwtWCMj1KDZCbqYu"
      });
    });
};