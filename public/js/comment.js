const mongoose = require('mongoose');
const commentShcema = mongoose.Schema({
    comment:{
        _id: mongoose.Schema.Types.ObjectId,
        blog: String,
        name: String,
        content: String,
        timeStamp: Number,
        likeCount: Number
    }
})
module.exports = mongoose.model('Comment', commentShcema );