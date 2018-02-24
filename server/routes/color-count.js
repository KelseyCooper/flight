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
  ];
  const data = {
    info: [
      { name: "Red Customers", value: 300 },
      { name: "Grey Customers", value: 200 },
      { name: "Blue Customers", value: 100 },
      { name: "Black Customers", value: 300 }
    ],
    labels: ["Red", "Grey", "Blue", "Black"],
    datasets: [
      {
        data: [300, 200, 100, 300],
        backgroundColor: ["#e01f5f", "#abb7cc", "#514ad6", "#565656"],
        hoverBackgroundColor: ["#ba1a4f", "#8b96a8", "#413baf", "#444444"]
      }
    ]
  };
  getRedCustomerColorData().then(redData => {
    data.datasets[0].data[0] = redData;
    data.info[0].value = redData;
    getGreyCustomerColorData().then(greyData => {
      data.datasets[0].data[1] = greyData;
      data.info[1].value = greyData;
      getBlueCustomerColorData().then(blueData => {
        data.datasets[0].data[2] = blueData;
        data.info[2].value = blueData;
        getBlackCustomerColorData().then(blackData => {
          data.datasets[0].data[3] = blackData;
          data.info[3].value = blackData;
          res.json(data);
        });
      });
    });
  });
});

module.exports = router;
