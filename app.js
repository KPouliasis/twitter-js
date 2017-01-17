'use strict';

const volleyball = require('volleyball');
const chalk = require('chalk');
const http = require('http');
const express = require('express');

const app = express();

// app.use(volleyball);

app.use(function(req, res, next) {
	// console.log(chalk.blue(req.path.slice(1)));
	let type = req.method;
	let code = res.statusCode;
	let status = http.STATUS_CODES[code];
	let path = req.url;
	console.log(type, path, code, status);
	next();
})

app.use('/special/', function(req, res, next) {
	console.log(chalk.red('the secret zone'));
	next();
})

app.get('/', function(req, res, next) {
	res.send('Hello there!');
})

app.get('/news', function(req, res, next) {
	res.send("All the news that's fit to print");
})

app.listen(3000, function() {
	console.log('server listening');
});