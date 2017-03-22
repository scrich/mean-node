var router = require('express').Router()
var path = require('path')

// http://stackoverflow.com/questions/25463423/res-sendfile-absolute-path

router.get('/', function (req,res) {
    res.sendFile(path.join(__dirname, '../layouts', 'posts.html'))
})

module.exports = router