'use strict';

const chalk = require('chalk');
const express = require('express');

const app = express();

app.listen(3000, function() {
	console.log('server listening');
});

app.use(function(req, res, next) {
	console.log(chalk.blue(req.path.slice(1)));
	next();
})

app.use('/special/', function(req, res, next) {
		console.log(chalk.red('the secret zone'));
})

app.get('/', function(req, res, next) {
	res.send('Hello there!');
})

app.get('/news', function(req, res, next) {
	res.send("All the news that's fit to print");
})