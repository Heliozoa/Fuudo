var express = require('express');
var router = express.Router();
var Food = require('../models/food');
var Restaurant = require('../models/restaurant');

router.get('/', function(req, res, next) {
  Food.getOne((err,food) => {
    res.render('index', { food: food,
                          restaurant: food.restaurant,
                          reviews: food.reviews });
  });
});

module.exports = router;