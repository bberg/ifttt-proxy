var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./server/routes/index');
var express = require('express');
var log = require(path.join(__dirname, 'log'));
var config = require(path.join(__dirname, 'config'));
var app = express();


log.error('---- APP RESTART ----');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(config.port)    

module.exports = app;


// app.use(express.static(path.join(__dirname, './client', 'public')));

// var favicon = require('serve-favicon');

// view engine setup
// app.set('views', path.join(__dirname, './client','public','views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/client/public/favicon.ico'));
// app.use(logger('dev'));

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   console.log(err);
//   res.render('error', {
//     message: err.message,
//     error: err
//   });
// });


