var express = require("express");
var router = express.Router();
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

function getSmallData() {
  return knex
    .select("*")
    .from("purchased")
    .where({ size: "small" })
    .then(results => {
      return results.length;
    });
}

function getMediumData() {
  return knex
    .select("*")
    .from("purchased")
    .where({ size: "medium" })
    .then(results => {
      return results.length;
    });
}

function getLargeData() {
  return knex
    .select("*")
    .from("purchased")
    .where({ size: "large" })
    .then(results => {
      return results.length;
    });
}

function getXLargeData() {
  return knex
    .select("*")
    .from("purchased")
    .where({ size: "x-large" })
    .then(results => {
      return results.length;
    });
}

router.get("/", function(req, res, next) {
  const finalTable = [
    { name: "Small", value: 300, fill: "#3f75cc" },
    { name: "Medium", value: 200, fill: "#cc3f80" },
    { name: "Large", value: 100, fill: "#3fc2cc" },
    { name: "X-Large", value: 100, fill: "#3fc2cc" }
  ];
  getSmallData().then(smallData => {
    finalTable[0].value = smallData;
    getMediumData().then(mediumData => {
      finalTable[1].value = mediumData;
      getLargeData().then(largeData => {
        finalTable[2].value = largeData;
        getXLargeData().then(xLargeData => {
          finalTable[3].value = xLargeData;
          console.log(finalTable);

          res.json(finalTable);
        });
      });
    });
  });
});

module.exports = router;
