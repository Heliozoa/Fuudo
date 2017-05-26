const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  message: {
    type: String,
    required: true,
    minlength: 4,
  },
  image: {
    type: Buffer,
    contentType: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
