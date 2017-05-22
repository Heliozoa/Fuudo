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
      type: String,
      required: true,
      minlength: 2
    },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true
    },
});

foodSchema.statics.random = function(cb) {
  this.count().exec((err, count) => {
    var rand = Math.floor(Math.random() * count);
    return this.findOne().skip(rand).exec(err,cb);
  });
};

var Food = mongoose.model('Food', foodSchema);

module.exports = Food;