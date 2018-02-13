var express = require("express");
var router = express.Router();
var authenticate = require("../middlewares/authenticate");
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

function editUser(data) {
    // console.log(data.id);
    
  return knex("customers")
    .where('id', data.id)
    .update({
      name: data.name,
      email: data.email,
      gender: data.gender,
      age: data.age,
      color: data.color,
      size: data.size,
      reason_to_buy: data.notes
    })
    .then(users => {
    //   console.log(users);

      return true;
    });
}

router.post("/", (req, res) => {
  editUser(req.body);
  res.json({ success: true });
});

module.exports = router;
