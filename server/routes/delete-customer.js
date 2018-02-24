var express = require("express");
var router = express.Router();
var authenticate = require("../middlewares/authenticate");
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

function deleteCustomer(data) {
  return knex("purchased")
    .where("user_id", data.id)
    .del()
    .then(() => {
        return knex("customers")
        .where("id", data.id)
        .del()
        return
    })
}

router.post("/", (req, res) => {
    console.log(req.body);
    
  deleteCustomer(req.body);
  res.json({ success: true });
});

module.exports = router;
