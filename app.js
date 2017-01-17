'use strict';

const nunjucks = require('nunjucks');
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
	console.log(type, path, code);
	next();
})

app.use('/special/', function(req, res, next) {
	console.log(chalk.red('the secret zone'));
	next();
})

// app.get('/', function(req, res, next) {
// 	res.send('Hello there!');
// })

app.get('/news', function(req, res, next) {
	res.send("All the news that's fit to print");
})




let locals = {
	title : 'Twitter-ish',
	people: [
		{ name: 'Jess'},
		{ name: 'Kostas'},
		{ name: 'Mike'}
	]
};

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates


app.get('/', function(req, res, next) {
	res.render('index', locals);
})




app.listen(3000, function() {
	console.log('server listening');
});






















