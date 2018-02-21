var express = require("express");
var router = express.Router();
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

function getAge11Data() {
  return knex
    .select("*")
    .from("customers")
    .where({ age: 11 })
    .then(results => {
      return results.length;
    });
}

function getAge21Data() {
  return knex
    .select("*")
    .from("customers")
    .where({ age: 21 })
    .then(results => {
      return results.length;
    });
}

function getAge31Data() {
  return knex
    .select("*")
    .from("customers")
    .where({ age: 31 })
    .then(results => {
      return results.length;
    });
}

function getAge41Data() {
  return knex
    .select("*")
    .from("customers")
    .where({ age: 41 })
    .then(results => {
      return results.length;
    });
}

function getAge51Data() {
  return knex
    .select("*")
    .from("customers")
    .where({ age: 51 })
    .then(results => {
      return results.length;
    });
}

function getAge61Data() {
  return knex
    .select("*")
    .from("customers")
    .where({ age: 61 })
    .then(results => {
      return results.length;
    });
}

function getAge71Data() {
  return knex
    .select("*")
    .from("customers")
    .where({ age: 71 })
    .then(results => {
      return results.length;
    });
}

// return finalTable;
/* GET home page. */
router.get("/", function(req, res, next) {
  const finalTable = [
    { name: "11-20", value: 300, fill: "#a7b5cc" },
    { name: "21-30", value: 200, fill: "#83a6ed" },
    { name: "31-40", value: 100, fill: "#8dd1e1" },
    { name: "41-50", value: 300, fill: "#82ca9d" },
    { name: "51-60", value: 100, fill: "#a4de6c" },
    { name: "61-70", value: 100, fill: "#d0ed57" },
    { name: "71+", value: 100, fill: "#ffc658" }
  ];
  getAge11Data().then(age11Data => {
    finalTable[0].value = age11Data;
    getAge21Data().then(age21Data => {
      finalTable[1].value = age21Data;
      getAge31Data().then(age31Data => {
        finalTable[2].value = age31Data;
        getAge41Data().then(age41Data => {
          finalTable[3].value = age41Data;
          getAge51Data().then(age51Data => {
            finalTable[4].value = age51Data;
            getAge61Data().then(age61Data => {
              finalTable[5].value = age61Data;
              getAge71Data().then(age71Data => {
                finalTable[6].value = age71Data;
                res.json(finalTable);
              });
            });
          });
        });
      });
    });
  });
});

module.exports = router;
