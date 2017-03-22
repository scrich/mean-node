var mongoose = require('mongoose')
mongoose.Promise = Promise; // added to avoid error DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
mongoose.connect('mongodb://localhost/social', function() {
    console.log('mongodb connected')
})
module.exports = mongoose