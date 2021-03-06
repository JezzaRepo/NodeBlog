﻿
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
//app.use(session({
//	resave: true,
//	saveUninitialized: true,
//	secret: 'uwotm8'
//}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(app.router);
//app.use(require('stylus').middleware(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}


app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/cv', routes.cvdetails);


app.get('/drawing', routes.drawing);
app.get('/performance', routes.performance);
app.get('/sound', routes.sound);
app.get('/video', routes.video);
app.get('/writing', routes.writing);
app.get('/collaboration', routes.collaboration);


// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
	app.use(errorHandler());
}

var server = http.createServer(app);

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
