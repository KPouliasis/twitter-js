const express = require('express')
const app = express()
const port = 3000

//EXTRA CREDIT
function logResStatusAndNext(req,res,next){
  console.log(res.???)
  next()
}
 app.use= (function(req,res, next) {
       console.log('Request Type', req.method, req.originalUrl)
       next()
     })
app.get = (function(req, res, next){
      console.log(req.originalUrl)
      next()
})

app.get('/', function(req, res, next){
  res.send('Hello Visitor')
  //((req,res,next) => { console.log(res.status); next()})(req,res,next)
})

app.get('/news', function(req,res,next){
    res.send('No news is some news')
    next()
  })


app.listen(port)
console.log('magic in the port' + port)
