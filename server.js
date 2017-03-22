var express = require('express')
var bodyParser = require('body-parser')
var Post= require('./models/post')

var app = express()
app.use(bodyParser.json())
app.use('/api/posts', require('./controllers/api/posts'))

// GET the flat html page

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/layouts/posts.html')
})

app.listen(3000,function() {
    console.log('Server listening on ', 3000)
})