var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var customers = require("./routes/customers");
var colorCount = require('./routes/color-count');
var newCustomer = require('./routes/new-customer');
var editCustomer = require('./routes/edit-customer');
var fetchCustomer = require("./routes/fetch-customer");
var ageData = require("./routes/age-data");
var genderData = require("./routes/gender-data");
var sizeData = require("./routes/size-data");

var cookieSession = require("cookie-session");
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

var cors = require("cors");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const passport = require("passport");
app.use(passport.initialize());

app.use('/', index);
app.use('/users', users);
app.use('/customers', customers);
app.use("/color-count", colorCount);
app.use("/new-customer", newCustomer);
app.use('/edit-customer', editCustomer)
app.use("/fetch-customer", fetchCustomer);
app.use("/age-data", ageData);
app.use("/gender-data", genderData);
app.use("/size-data", sizeData);;

app.use(
  cookieSession({
    name: "session",
    keys: [
      /* secret keys */
    ],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
