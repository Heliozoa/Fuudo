const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const reviewSchema = Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
  },
  message: {
    type: String,
    minlength: 4,
    required: true,
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
