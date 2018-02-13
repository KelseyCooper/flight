exports.seed = function(knex, Promise) {
  return knex("customers")
    .del() // Deletes ALL existing entries
    .then(function() {
      return knex("customers").insert({
        name: "Bruce",
        email: "dunlop@live.ca",
        gender: "male",
        age: 51,
        size: "large",
        color: "red",
        reason_to_buy: "present"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Martha",
        email: "marth@live.ca",
        gender: "female",
        age: 14,
        size: "small",
        color: "grey",
        reason_to_buy: "for husband"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "John",
        email: "john@hell.com",
        gender: "male",
        age: 50,
        size: "large",
        color: "red",
        reason_to_buy: "gift"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Lyn",
        email: "lyn@live.ca",
        gender: "female",
        age: 21,
        size: "Small",
        color: "grey",
        reason_to_buy: "for child"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Parker",
        email: "pray@ray.com",
        gender: "male",
        age: 34,
        size: "medium",
        color: "Black",
        reason_to_buy: "gift"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "George",
        email: "George@g.com",
        gender: "male",
        age: 60,
        size: "large",
        color: "red",
        reason_to_buy: "gift"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Heidi",
        email: "h@h.com",
        gender: "female",
        age: 31,
        size: "medium",
        color: "blue",
        reason_to_buy: "self"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Grace",
        email: "gr@grac.com",
        gender: "female",
        age: 29,
        size: "medium",
        color: "red",
        reason_to_buy: "self"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Peter",
        email: "p@p.com",
        gender: "male",
        age: 54,
        size: "small",
        color: "black",
        reason_to_buy: "self"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Wayne",
        email: "wau@l.com",
        gender: "male",
        age: 21,
        size: "medium",
        color: "black",
        reason_to_buy: "self"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Paula",
        email: "paula@paul.com ",
        gender: "female",
        age: 25,
        size: "medium",
        color: "grey",
        reason_to_buy: "gift"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Harry",
        email: "harry@dong.com",
        gender: "male",
        age: 32,
        size: "medium",
        color: "red",
        reason_to_buy: "self"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Naomi",
        email: "i@moan.com",
        gender: "female",
        age: 26,
        size: "large",
        color: "black",
        reason_to_buy: "self"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Helen",
        email: "h@moan.com",
        gender: "other",
        age: 26,
        size: "large",
        color: "blue",
        reason_to_buy: "self"
      });
    });
};