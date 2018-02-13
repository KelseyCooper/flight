var express = require("express");
var router = express.Router();
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

function getCustomerInfo(id) {
  return knex("customers")
    .where('id', id)
}

/* GET home page. */
router.post("/", function(req, res, next) {
  getCustomerInfo(req.body.id).then(data => {
    res.json(data);
  });
});

module.exports = router;
