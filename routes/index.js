var express = require('express');
var router = express.Router();
var Food = require('../models/food');
var Restaurant = require('../models/restaurant');

router.get('/', function(req, res, next) {
  Food.random((err,food) => {
    Restaurant.findById(food.restaurant, (err,restaurant) => {
      res.render('index', { food: food ,
                            restaurant: restaurant });
    });
  });
});

module.exports = router;