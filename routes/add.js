var express = require('express');
var router = express.Router();

var Food = require('../models/food');
var Restaurant = require('../models/restaurant');
var Review = require('../models/review');
var fs = require('fs');

router.get('/restaurant', function(req, res, next) {
    res.render('addRestaurant');
});

router.post('/restaurant', function(req, res, next) {
  let filepath = req.files.image.file;
  req.body.image = fs.readFileSync(filepath).toString('base64');
  req.body.image.contentType = 'image/png';
  new Restaurant(req.body).save();
  
  res.redirect('restaurant');
});

router.get('/food', function(req, res, next) {
  Restaurant.find({}, (err,restaurants) => {
    res.render('addFood', { restaurants: restaurants });
  });    
});

router.post('/food', function(req, res, next) {
  let filepath = req.files.image.file;
  req.body.image = fs.readFileSync(filepath).toString('base64');
  req.body.image.contentType = 'image/png';
  var food = new Food(req.body);
  var restaurantId = req.body.restaurant;
  
  Restaurant.findById(restaurantId, function (err,restaurant) {
   var foods = restaurant.foods;
   foods.push(food);
   food.save();
   restaurant.save();
   res.redirect('food');
  });
});

router.get('/review', function(req, res, next) {
  Food.find({}, (err,foods) => {
    res.render('addReview', { foods: foods });
  });    
});

router.post('/review', function(req, res, next) {
  let filepath = req.files.image.file;
  req.body.image = fs.readFileSync(filepath).toString('base64');
  req.body.image.contentType = 'image/png';
  var review = new Review(req.body);
  var foodId = req.body.food;
  
  Food.findById(foodId, function (err,food) {
   var reviews = food.reviews;
   reviews.push(review);
   review.save();
   food.save();
   res.redirect('review');
  });
});

module.exports = router;