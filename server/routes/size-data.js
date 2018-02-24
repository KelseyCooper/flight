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
  const data = {
    labels: ["Small", "Medium", "Large", "X-Large"],
    datasets: [
      {
        data: [],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#48E8B6"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#48E8B6"]
      }
    ],
    info: [
      { name: "Small", value: 0 },
      { name: "Medium", value: 0 },
      { name: "Large", value: 0 },
      { name: "X-Large", value: 0 }
    ]
  };
  getSmallData().then(smallData => {
    data.datasets[0].data.push(smallData);
    data.info[0].value = smallData;
    getMediumData().then(mediumData => {
      data.datasets[0].data.push(mediumData);
      data.info[1].value = mediumData;
      getLargeData().then(largeData => {
        data.datasets[0].data.push(largeData);
        data.info[2].value = largeData;
        getXLargeData().then(xLargeData => {
          data.datasets[0].data.push(xLargeData);
          data.info[3].value = xLargeData;

          res.json(data);
        });
      });
    });
  });
});

module.exports = router;
