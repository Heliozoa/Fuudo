const express = require('express');
const Food = require('../models/food');

const router = express.Router();

router.get('/', function (req, res, next) {
  Food.getOne((err, food) => {
    if(!food) {
      res.render('noFood');
    } else {
      res.render('index', {
        food,
        restaurant: food.restaurant,
        reviews: food.reviews
      });
    }
  });
});

module.exports = router;
