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
  return results.length
  })
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

function getBlackCustomerColorData() {
  return knex
    .select("*")
    .from("purchased")
    .where({ color: "black" })
    .then(results => {
      return results.length;
    });
}

// return finalTable;
/* GET home page. */
router.get("/", function(req, res, next) {
  const finalTable = [
    { name: "Red Customers", value: 300 }, 
    { name: "Grey Customers", value: 200 },
    { name: "Blue Customers", value: 100 }, 
    { name: "Black Customers", value: 300 }
  ]
  getRedCustomerColorData().then(redData => {
    finalTable[0].value = redData;
      getGreyCustomerColorData().then(greyData => {
        finalTable[1].value = greyData;
          getBlueCustomerColorData().then(blueData => {
            finalTable[2].value = blueData;
              getBlackCustomerColorData().then(blackData => {
                finalTable[3].value = blackData;
                res.json(finalTable);
              });
          });
      });
  })
});

module.exports = router;