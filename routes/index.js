const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.use(express.static('public'))
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm : true } );
});

// parse application/x-www-form-urlencoded


// router.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets : list, showForm : true, name : name } );
});

router.get('/tweets/:id', function(req,res){
  var id = req.params.id;
  var tweet = tweetBank.find({id:id})
  res.render( 'index', { tweets : tweet, showForm : false } );
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});


module.exports = function(io){
  const express = require('express');
  const router = express.Router();
  const bodyParser = require('body-parser')
  // could use one line instead: const router = require('express').Router();
  const tweetBank = require('../tweetBank');

  router.use(express.static('public'))
  router.use(bodyParser.urlencoded({ extended: false }))
  router.use(bodyParser.json())

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm : true } );
  });

  // parse application/x-www-form-urlencoded


  // router.use(function (req, res) {
  //   res.setHeader('Content-Type', 'text/plain')
  //   res.write('you posted:\n')
  //   res.end(JSON.stringify(req.body, null, 2))
  // })

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { tweets : list, showForm : true, name : name } );
  });

  router.get('/tweets/:id', function(req,res){
    var id = req.params.id;
    var tweet = tweetBank.find({id:id})
    res.render( 'index', { tweets : tweet, showForm : false } );
  })

  var urlencodedParser = bodyParser.urlencoded({ extended: false })

  // POST /login gets urlencoded bodies
  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });

  return router;
}
