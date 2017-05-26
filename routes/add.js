const express = require('express');
const Food = require('../models/food');
const Restaurant = require('../models/restaurant');
const Review = require('../models/review');
const fs = require('fs');

const router = express.Router();

function setImageInReqBody(req) {
  const filepath = req.files.image.file;
  req.body.image = fs.readFileSync(filepath).toString('base64');
  req.body.image.contentType = 'image/png';
  return req;
}

router.get('/restaurant', function (req, res, next) {
  res.render('addRestaurant');
});

router.post('/restaurant', function (req, res, next) {
  req = setImageInReqBody(req);
  new Restaurant(req.body).save((err) => {
    if (err) {
      res.render('error', { error: err });
    } else {
      res.render('addRestaurant', { message: 'Restaurant has been successfully added' });
    }
  });
});

function renderFood(res, message) {
  Restaurant.find({}, (err, restaurants) => {
    res.render('addFood', { restaurants, message});
  });
}


router.get('/food', function (req, res, next) {
  renderFood(res);
});

router.post('/food', function (req, res, next) {
  req = setImageInReqBody(req);
  const food = new Food(req.body);
  const restaurantId = req.body.restaurant;
  Restaurant.findById(restaurantId, function (err, restaurant) {
    restaurant.foods.push(food);
    food.save((err) => {
      if (err) {
        res.render('error', { error: err });
      } else {
        restaurant.save((err) => {
          renderFood(res, 'Food has been successfully added');
        });
      }
    });
  });
});

function renderReview(res, message) {
  Food.find({}, (err, foods) => {
    res.render('addReview', { foods });
  });
}

router.get('/review', function (req, res, next) {
  renderReview(res);
});

router.post('/review', function (req, res, next) {
  req = setImageInReqBody(req);
  const review = new Review(req.body);
  const foodId = req.body.food;
  Food.findById(foodId, function (err, food) {
    food.reviews.push(review);
    review.save((err) => {
      if (err) {
        res.render('error', { error: err });
      } else {
        food.save((err) => {
          renderReview(res, 'Review has been successfully added');
        });
      }
    });
  });
});


module.exports = router;
