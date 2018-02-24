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
    { name: "Male", uv: 300, fill: "#3f75cc" },
    { name: "Female", uv: 200, fill: "#cc3f80" },
    { name: "Other", uv: 100, fill: "#3fc2cc" }
  ];
  const data = {
    info: [
      { name: "Male", value: 300 },
      { name: "Female", value: 200 },
      { name: "Other", value: 100 }
    ],
    labels: ['Men', 'Women', 'Other'],
    datasets: [{
      data: [],
      backgroundColor: [ "rgba(63, 117, 204, .5)", "rgba(204, 63, 128, .5)", "rgba(63, 194, 204, .5)" ],
      hoverBackgroundColor: [ "rgba(63, 117, 204, .3)", "rgba(204, 63, 128, .3)", "rgba(63, 194, 204, .3)" ]
    }]
  }
  getMaleData().then(maleData => {
    data.datasets[0].data.push(maleData);
    data.info[0].value = maleData;
    getFemaleData().then(femaleData => {
      data.datasets[0].data.push(femaleData);
      data.info[1].value = femaleData;
      getOtherData().then(otherData => {
        data.datasets[0].data.push(otherData);
        data.info[2].value = otherData;
          res.json(data);
      });
    });
  });
  
});




module.exports = router;
