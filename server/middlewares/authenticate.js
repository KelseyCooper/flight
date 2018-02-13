var jwt = require("jsonwebtoken");
var config = require("../config");

const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

function addUser(data) {
    console.log(data);
    
  return knex("customers")
    .insert({
      name: data.name,
      email: data.email,
      gender: data.gender,
      age: data.age,
      color: data.color,
      size: data.size,
      reason_to_buy: data.notes
    })
    .then(users => {
      console.log(users);

      return true;
    });
}

authenticate = (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  let token;
  if (authorizationHeader) {
    token = authorizationHeader.split(" ")[1];
  }
  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: "Failed to authenticate" });
      } else {
        addUser(req.body);
      }
    });
  } else {
    res.status(405).json({
      error: "No token provided"
    });
  }
};

module.exports = authenticate;
