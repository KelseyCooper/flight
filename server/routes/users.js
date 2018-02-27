var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config =require('../config')

const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

// Check if email is already in db before login/register
function checkEmailInDB(emailres) {
  return knex("users")
    .where({ email: emailres })
    .returning('*')
    .then(users => {

      return users.length !== 0;
    });
}

// Verifies email and password match
function checkLogin(emailreq, password) {
  return knex('users')
  .where({ email: emailreq })
  .returning('*')
  .then((result) => {
    if (bcrypt.compareSync(password, result[0].password))  {
      return result[0].id;
    }
    else {
      return 0;
    }
  });
}

router.post("/", function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body.password);
  
  
  checkEmailInDB(email, password).then(exists => {
    if (exists) {
      checkLogin(email, password).then(userID => {
        if (userID) {
          const token = jwt.sign({
            id: userID
          }, config.jwtSecret);
          res.json({token});
          
          // res.status(401).json({ errors: { form: 'Invalid Credentials' }});
        } else {
          res.status(401).json({ errors: { form: 'Invalid Credentials password not match' }});
          return;
        }
      });
    } else {
      res.status(402).json({ errors: { form: "Invalid Credentials email is invalid" } });
      return;
    }
  });
});

module.exports = router;
