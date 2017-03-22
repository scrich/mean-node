var Post = require('../../models/post')
var router = require('express').Router()

// GET from the database

router.get('/', function (req,res,next) {
    Post.find()
    .sort('-date')
    .exec(function(err, posts) {
        if (err) {return next (err)}
        res.json(posts)
    })
})

// Post a new comment


router.post('/', function (req,res, next) {
    var post = new Post ({
        username: req.body.username,
        body: req.body.body
    })
    post.save(function(err,post) {
        if (err) {
            return next(err)
        }
        res.status(201).json(post)
    })
})

module.exports = router