var express = require("express");
var router = express.Router();
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);
var _ = require("underscore");

function getAllCustomersInfo() {
  return knex
    .select()
    .from("purchased")
    .rightJoin("customers", "customers.id", "purchased.user_id")
    .then(function(data) {
      return _.chain(data)
        .groupBy(function(user) {
          return user.id;
        })
        .map(function(users) {
          var user = _.chain(users)
            .first()
            .pick("id", "name", "email", "age", "gender", "reason_to_buy" );
          var purchased = _.map(users, function(u) {
            return { id: u.id, size: u.size, color: u.color };
          });
          user.purchased = purchased;
          return user;
        })
        .value();
    });
}

/* GET home page. */
router.get("/", function(req, res, next) {
  getAllCustomersInfo().then(data => {
    let customerObject = [];
    data.map(item => {
      console.log(item._wrapped.name);
      customerObject.push({
        id: item._wrapped.id,
        name: item._wrapped.name,
        email: item._wrapped.email,
        gender: item._wrapped.gender,
        age: item._wrapped.age,
        reason_to_buy: item._wrapped.reason_to_buy,
        purchased: { item: item.purchased }
      });
    })
    res.json(customerObject);
  });
});

module.exports = router;