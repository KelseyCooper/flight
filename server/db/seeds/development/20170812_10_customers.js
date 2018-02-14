exports.seed = async function(knex, Promise) {
    await knex("purchased").del()
    await knex("customers").del()
    await knex.raw('ALTER SEQUENCE customers_id_seq RESTART WITH 1')
    await knex.raw('ALTER SEQUENCE purchased_id_seq RESTART WITH 1')
    await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1')
    await knex("customers")
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
      })
    await knex("purchased")
      .then(() => {
        return knex("purchased").insert({
          color: "Blue",
          size: "Medium",
          user_id: 1
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Black",
          size: "Medium",
          user_id: 1
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Red",
          size: "Medium",
          user_id: 2
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 1
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 1
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 2
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 3
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 4
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 5
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 6
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 7
        });
      })      
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 8
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 9
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 10
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 11
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 12
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 13
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 14
        });
      })
      .then(() => {
        return knex("purchased").insert({
          color: "Grey",
          size: "Medium",
          user_id: 12
        });
      })                                                                              
};
