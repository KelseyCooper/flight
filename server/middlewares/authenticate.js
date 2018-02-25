var jwt = require("jsonwebtoken");
var config = require("../config");

const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

function addUser(data) {
    
  return knex("customers")
    .insert({
      name: data.name,
      email: data.email,
      gender: data.gender,
      age: data.age,
      reason_to_buy: data.notes
    })
    .returning('*')
    .then(user => {      
      data.bought.map(item => {
        
        return knex("purchased")
          .insert({
            color: item.color,
            size: item.size,
            user_id: user[0].id,
            order_number: item.ordernum
          })
          .then(() => {
            return true;
          });
      });
      return true;
    })
}

authenticate = (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  let token;
  if (authorizationHeader) {
    token = authorizationHeader.split(" ")[1];
  }
  if (req.body.bought.length === 0 || !req.body.bought.length % 2 ) {
    res.status(201).json({ error: "error"})
  }
  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: "Failed to authenticate" });
      } else {
        console.log(req.body);
        
        // addUser(req.body);

        res.status(200).json({ success: true });

      }
    });
  } else {
    res.status(405).json({
      error: "No token provided"
    });
  }
};

module.exports = authenticate;
