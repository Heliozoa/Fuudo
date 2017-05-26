const express = require('express');
const Food = require('../models/food');

const router = express.Router();

router.get('/', function (req, res, next) {
  Food.getOne((err, food) => {
    res.render('index', {
      food,
      restaurant: food.restaurant,
      reviews: food.reviews });
  });
});

module.exports = router;
