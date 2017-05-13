var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var foodSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2
    },
    restaurant: {
      type: String,
      required: true,
      minlength: 2
    },
    image: {
      type: String,
      required: true,
      minlength: 2
    }
});

var Food = mongoose.model('Food', foodSchema);

module.exports = Food;