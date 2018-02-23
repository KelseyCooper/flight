var express = require("express");
var router = express.Router();
var authenticate = require("../middlewares/authenticate");
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

function editUser(data) {
    
  return knex("customers")
    .where('id', data.id)
    .update({
      name: data.name,
      email: data.email,
      gender: data.gender,
      age: data.age,
      reason_to_buy: data.notes
    })
    .then(users => {
      return knex("purchased")
      .where('user_id', data.id)
      .del()
      return true;
    })
    .then(user => {
      data.bought.map(item => {
        return knex("purchased")
        .insert({
          color: item.color,
          size: item.size,
          user_id: data.id,
          order_number: item.ordernum
        })
        .then(() => {
          return true;
        });
      });
      return true;
    })
}

router.post("/", (req, res) => {
  editUser(req.body);
  res.json({ success: true });
});

module.exports = router;

