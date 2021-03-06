var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var cors = require('cors');
var Sequelize = require('sequelize');
// var _ = require("lodash");
// var jwt = require('jsonwebtoken');
var db = require('./models/index');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var prodcutsRouter = require('./routes/products');
var customersRouter = require('./routes/customers');
var taxesRouter = require('./routes/taxes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.set('etag', false);
app.disable('etag');

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', prodcutsRouter);
app.use('/customers', customersRouter);
app.use('/taxes', taxesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //no caching
  res.setHeader('Cache-Control', 'no-cache', 'no-store');
  next();

  // render the error page
  res.status(err.status || 500);
  res.render('error');


  // Access control
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
  // next();
});

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
  db.sequelize.sync();
});

// app.set('port', process.env.PORT || 8080);
// var server = app.listen(app.get('port'), function () {
//   debug('Express server listening on port ' + server.address().port);
// });
