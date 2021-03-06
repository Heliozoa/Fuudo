const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const foodSchema = Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
  },
  image: {
    type: Buffer,
    contentType: String,
    required: true,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review',
  }],
});

foodSchema.statics.getOne = function (cb) {
  this.count().exec((err, count) => {
    const rand = Math.floor(Math.random() * count);
    return this
      .findOne()
      .skip(rand)
      .populate('restaurant')
      .populate('reviews')
      .exec(err, cb);
  });
};

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
