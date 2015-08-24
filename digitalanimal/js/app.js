var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./../digitalanimal/routes/index');
var users = require('./../digitalanimal/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

window.amigoData = {
  // Amigo data

  // Either sharepointName OR touchpointName
  // can be defined, not both.
  sharepointName: 'homepage_article',
  touchpointName: 'banner_view',


  //set up test related data - sharepoint
  // User-related data
  userId: 'uid1234',
  username: 'johnsmith58',
  email: 'john@smith.com',
  name: 'John Smith',
  facebookId: '1234',
  twitterId: '21361816e863217',

  shareChannel: 'twitter',    // only on token consumption,
  shareTokenAlias: 'dave123',  // only on token creation

  // Inside of the `metadata` property, you can define
  // any metadata about the Sharepoint or Touchpoint.
  metadata: {
    transaction: {
      currency: 'GBP',
      amount: 50.99
    },
    product: {
      id: 'GLP12345',
      name: 'Gibson Les Paul',
      colour: 'Tobacco Burst'
    },
    user: {
      twitter_id: '21361816e863217'
    },
    somethingElse: {
      myField: true,
      myOtherField: 'value'
    }
  }
}

window.amigoAsyncInit = function () {
  Amigo.init({
    apiKey: '60d0bdc98d7aa94aa3a84e80a4906eb44c5398250d55129508378e0cf2a26f25',
    autoSend: false,
    debug: true
  });
  (function (d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//d22stxronnwc65.cloudfront.net/sdk-latest.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'amigo-jssdk'));

  var meta = [
    {
      sharepointName: 'swsharepoint',
      token: 'abcdef123456',
      alias: 'myalias',
      queryParamName: 'ast',
      abs: true
    }
  ]
};

console.log("hello " + meta.alias);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
