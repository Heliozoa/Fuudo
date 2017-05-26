const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;

const restaurantSchema = Schema({
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
  foods: [{
    type: Schema.Types.ObjectId,
    ref: 'Food',
  }],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
