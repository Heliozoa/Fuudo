var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var foodSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2
    },
    image: {
      type: Buffer,
      contentType: String,
      required: true
    },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true
    },
    reviews: [{
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }]
});

foodSchema.statics.getOne = function(cb) {
  this.count().exec((err, count) => {
    var rand = Math.floor(Math.random() * count);
    return this
      .findOne()
      .skip(rand)
      .populate('restaurant')
      .populate('reviews')
      .exec(err,cb);
  });
};

var Food = mongoose.model('Food', foodSchema);

module.exports = Food;