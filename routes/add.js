var express = require('express');
var router = express.Router();
var Food = require('../models/food');
var mv = require('mv');

router.get('/', function(req, res, next) {
  res.render('add');
});

router.post('/', function(req, res, next) {
   let file = req.files.image;
   mv(file.file, './public/images_food/'+file.filename, function(err) {
        console.dir(err);
   });
   req.body.image = file.filename;
   new Food(req.body).save();
   res.redirect('/'); 
});

module.exports = router;
