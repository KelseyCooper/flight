exports.seed = function(knex, Promise) {
  return knex("customers");

  return knex("purchased")
    .del() // Deletes ALL existing entries
    .then(function() {
      // Inserts seed entries one by one in series
      return knex("purchased").insert({
        color: "Black",
        size: "Small",
        user_id: 1
      });
    })
    .then(function() {
      return knex("purchased").insert({
        color: "Black",
        size: "Small",
        user_id: 2
      });
    })
    .then(function() {
      return knex("purchased").insert({
        color: "Black",
        size: "Small",
        user_id: 1
      });
    })
    .then(function() {
      return knex("purchased").insert({
        color: "Black",
        size: "Small",
        user_id: 3
      });
    })
    .del() // Cannot delete current entries because of foreign key..
    .then(function() {
      return knex("customers").insert({
        name: "Bruce",
        email: "dunlop@live.ca",
        gender: "male",
        age: 51,
        amount_purchased: 1,
        reason_to_buy: "present"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Martha",
        email: "marth@live.ca",
        gender: "female",
        age: 14,
        amount_purchased: 2,
        reason_to_buy: "for husband"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "John",
        email: "john@hell.com",
        gender: "male",
        age: 50,
        amount_purchased: 1,
        reason_to_buy: "gift"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Lyn",
        email: "lyn@live.ca",
        gender: "female",
        age: 21,
        amount_purchased: 3,
        reason_to_buy: "for child"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Parker",
        email: "pray@ray.com",
        gender: "male",
        age: 34,
        amount_purchased: 1,
        reason_to_buy: "gift"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "George",
        email: "George@g.com",
        gender: "male",
        age: 60,
        amount_purchased: 2,
        reason_to_buy: "gift"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Heidi",
        email: "h@h.com",
        gender: "female",
        age: 31,
        amount_purchased: 3,
        reason_to_buy: "self"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Grace",
        email: "gr@grac.com",
        gender: "female",
        age: 29,
        amount_purchased: 2,
        reason_to_buy: "self"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Peter",
        email: "p@p.com",
        gender: "male",
        age: 54,
        amount_purchased: 1,
        reason_to_buy: "self"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Wayne",
        email: "wau@l.com",
        gender: "male",
        age: 21,
        amount_purchased: 1,
        reason_to_buy: "self"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Paula",
        email: "paula@paul.com ",
        gender: "female",
        age: 25,
        amount_purchased: 1,
        reason_to_buy: "gift"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Harry",
        email: "harry@dong.com",
        gender: "male",
        age: 32,
        amount_purchased: 1,
        reason_to_buy: "self"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Naomi",
        email: "i@moan.com",
        gender: "female",
        age: 26,
        amount_purchased: 1,
        reason_to_buy: "self"
      });
    })
    .then(function() {
      return knex("customers").insert({
        name: "Helen",
        email: "h@moan.com",
        gender: "other",
        age: 26,
        amount_purchased: 1,
        reason_to_buy: "self"
      });
    });
};
