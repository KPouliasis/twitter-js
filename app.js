'use strict';

const nunjucks = require('nunjucks');
const volleyball = require('volleyball');
const chalk = require('chalk');
const http = require('http');
const express = require('express');
const routes = require('./routes/');
var socketio = require('socket.io');

const app = express();
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

// app.use(volleyball);
// app.use(function(req, res, next) {
// 	// console.log(chalk.blue(req.path.slice(1)));
// 	let type = req.method;
// 	let code = res.statusCode;
// 	let status = http.STATUS_CODES[code];
// 	let path = req.url;
// 	console.log(type, path, code);
// 	next();
// })
var router = routes(io)

var server = app.listen(3000);
var io = socketio.listen(server);

app.use('/', router);
