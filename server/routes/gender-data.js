var express = require("express");
var router = express.Router();
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

function getMaleData() {
  return knex
    .select("*")
    .from("customers")
    .where({ gender: "male" })
    .then(results => {
      return results.length;
    });
}

function getFemaleData() {
  return knex
    .select("*")
    .from("customers")
    .where({ gender: "female" })
    .then(results => {
      return results.length;
    });
}

function getOtherData() {
  return knex
    .select("*")
    .from("customers")
    .where({ gender: "other" })
    .then(results => {
      return results.length;
    });
}

router.get("/", function(req, res, next) {
  const finalTable = [
    { name: "Male", value: 300, fill: "#3f75cc" },
    { name: "Female", value: 200, fill: "#cc3f80" },
    { name: "Other", value: 100, fill: "#3fc2cc" }
  ];
  getMaleData().then(maleData => {
    finalTable[0].value = maleData;
    getFemaleData().then(femaleData => {
      finalTable[1].value = femaleData;
      getOtherData().then(otherData => {
        finalTable[2].value = otherData;
          res.json(finalTable);
      });
    });
  });
  
});


module.exports = router;
