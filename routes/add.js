const express = require('express');
const Food = require('../models/food');
const Restaurant = require('../models/restaurant');
const Review = require('../models/review');
const fs = require('fs');

const router = express.Router();

router.get('/restaurant', function (req, res, next) {
  res.render('addRestaurant');
});

router.post('/restaurant', function (req, res, next) {
  const filepath = req.files.image.file;
  req.body.image = fs.readFileSync(filepath).toString('base64');
  req.body.image.contentType = 'image/png';
  new Restaurant(req.body).save();
  res.redirect('restaurant');
});

router.get('/food', function (req, res, next) {
  Restaurant.find({}, (err, restaurants) => {
    res.render('addFood', { restaurants });
  });
});

router.post('/food', function (req, res, next) {
  const filepath = req.files.image.file;
  req.body.image = fs.readFileSync(filepath).toString('base64');
  req.body.image.contentType = 'image/png';
  const food = new Food(req.body);
  const restaurantId = req.body.restaurant;
  Restaurant.findById(restaurantId, function (err, restaurant) {
    const foods = restaurant.foods;
    foods.push(food);
    food.save();
    restaurant.save();
    res.redirect('food');
  });
});

router.get('/review', function (req, res, next) {
  Food.find({}, (err, foods) => {
    res.render('addReview', { foods });
  });    
});

router.post('/review', function (req, res, next) {
  const filepath = req.files.image.file;
  req.body.image = fs.readFileSync(filepath).toString('base64');
  req.body.image.contentType = 'image/png';
  const review = new Review(req.body);
  const foodId = req.body.food;
  Food.findById(foodId, function (err, food) {
    const reviews = food.reviews;
    reviews.push(review);
    review.save();
    food.save();
    res.redirect('review');
  });
});

module.exports = router;
