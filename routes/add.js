var express = require('express');
var router = express.Router();

var Food = require('../models/food');
var Restaurant = require('../models/restaurant');
var mv = require('mv');

router.get('/restaurant', function(req, res, next) {
    res.render('addRestaurant');
});

router.post('/restaurant', function(req, res, next) {
  let file = req.files.image;
  mv(file.file, './public/images_food/'+file.filename, function(err) {console.dir(err);});
  req.body.image = file.filename;
  new Restaurant(req.body).save();
  
  res.redirect('restaurant');
});

router.get('/food', function(req, res, next) {
  Restaurant.find({}, (err,restaurants) => {
    res.render('addFood', { restaurants: restaurants });
  });    
});

router.post('/food', function(req, res, next) {
  let file = req.files.image;
  mv(file.file, './public/images_food/'+file.filename, function(err) {
       if(err) console.dir(err);
  });
  req.body.image = file.filename;
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

module.exports = router;