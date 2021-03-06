'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var device = require('express-device');

var routes = require('./routes');
var users = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// produce readable markup
app.configure('development', function () {
    app.locals.pretty = true;
});

// Hook in express-device to check for mobile.
app.use(device.capture());

// middleware to determine view path
app.use(function (req, res, next) {
    var mobile = req.device.type !== 'desktop',
        path = __dirname + '/views';

    if (mobile || true) {
        path += '/mobile';
    }

    app.set('views', path);

    next();
});


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.get('/', routes.index);
app.get('/users', users.list);

// Look for requests for partials.
app.get('/partial/:name', function (req, res) {
    res.render('partials/' + req.params.name);
});

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
