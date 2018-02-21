var express = require("express");
var router = express.Router();
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

function getRedCustomerColorData() {
  return knex
    .select("*")
    .from("purchased")
    .where({ color: "red" })
    .then(results => {
      return results.length;
    });
}

function getGreyCustomerColorData() {
  return knex
    .select("*")
    .from("purchased")
    .where({ color: "grey" })
    .then(results => {
      return results.length;
    });
}

function getBlueCustomerColorData() {
  return knex
    .select("*")
    .from("purchased")
    .where({ color: "blue" })
    .then(results => {
      return results.length;
    });
}

// return finalTable;
/* GET home page. */
router.get("/", function(req, res, next) {
console.log('hello from gender data route');
});


module.exports = router;
