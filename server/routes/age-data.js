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
  const data = {
    info: [
      { name: "11-20", value: 300 },
      { name: "21-30", value: 200 },
      { name: "31-40", value: 100 },
      { name: "41-50", value: 300 },
      { name: "51-60", value: 100 },
      { name: "61-70", value: 100 },
      { name: "71+", value: 100 },
    ],
    datasets: [
      {
        data: [],
        backgroundColor: [
          "rgba(102, 255, 204, 0.75)",
          "rgba(153, 255, 153, 0.75)",
          "rgba(153, 204, 255, 0.75)",
          "rgba(180, 102, 102, 0.75)",
          "rgba(204, 255, 204, 0.75)",
          "rgba(102, 102, 153, 0.75)",
          "rgba(255, 150, 51, 0.75)"
        ]
      }
    ],
    labels: ["11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "71+"]
  };
  getAge11Data().then(age11Data => {
    data.datasets[0].data.push(age11Data);
    data.info[0].value = age11Data;
    getAge21Data().then(age21Data => {
      data.datasets[0].data.push(age21Data);
      data.info[1].value = age21Data;
      getAge31Data().then(age31Data => {
        data.datasets[0].data.push(age31Data);
        data.info[2].value = age31Data;
        getAge41Data().then(age41Data => {
          data.datasets[0].data.push(age41Data);
          data.info[3].value = age41Data;
          getAge51Data().then(age51Data => {
            data.datasets[0].data.push(age51Data);
            data.info[4].value = age51Data;
            getAge61Data().then(age61Data => {
              data.datasets[0].data.push(age61Data);
              data.info[5].value = age61Data;
              getAge71Data().then(age71Data => {
                data.datasets[0].data.push(age71Data);
                data.info[6].value = age71Data;
                res.json(data);
              });
            });
          });
        });
      });
    });
  });
});

module.exports = router;
