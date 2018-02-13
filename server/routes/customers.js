var express = require("express");
var router = express.Router();
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

function getAllCustomersInfo() {
  return knex
    .select("*")
    .from("customers")
    .then(results => {
      return results;
    });
}

/* GET home page. */
router.get("/", function(req, res, next) {
  getAllCustomersInfo().then(function(data) {
    res.json(data);
  });
});

module.exports = router;
