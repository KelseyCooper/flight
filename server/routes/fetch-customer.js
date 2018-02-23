var express = require("express");
var router = express.Router();
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);
var _ = require("underscore");

function getCustomerInfo(data) {
  return knex
    .select()
    .from("purchased")
    .rightJoin("customers", "customers.id", "purchased.user_id")
    .where('customers.id', data)
    .then(function(data) {
      return _.chain(data)
        .groupBy(function(user) {
          return user.id;
        })
        .map(function(users) {
          var user = _.chain(users)
            .first()
            .pick("id", "name", "email", "age", "gender", "reason_to_buy");
          var purchased = _.map(users, function(u) {
            return { id: u.id, size: u.size, color: u.color, order_number: u.order_number };
          });
          user.purchased = purchased;
          return user;
        })
        .value();
    });
}

function getCustomerPurchases(id) {
  return knex('purchased')
  .where('user_id', id)
}

/* GET home page. */
router.post("/", function(req, res, next) {
  getCustomerInfo(req.body.id).then(data => {
    let customerObject = [];
    data.map(item => {
      customerObject.push({
        id: item._wrapped.id,
        name: item._wrapped.name,
        email: item._wrapped.email,
        gender: item._wrapped.gender,
        age: item._wrapped.age,
        reason_to_buy: item._wrapped.reason_to_buy,
        purchased: item.purchased
      });
    });
    
    res.json(customerObject);
  })

});
         
module.exports = router;