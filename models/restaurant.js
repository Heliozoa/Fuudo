var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var restaurantSchema = mongoose.Schema({
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
    foods: [{
      type: Schema.Types.ObjectId,
      ref: 'Food'
    }]
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;