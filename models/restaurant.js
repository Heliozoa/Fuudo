const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  image: {
    type: Buffer,
    contentType: String,
    required: true,
  },
  foods: [{
    type: Schema.Types.ObjectId,
    ref: 'Food',
  }],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
