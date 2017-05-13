var express = require('express');
var router = express.Router();
var Food = require('../models/food');

/* GET home page. */
router.get('/', function(req, res, next) {
    Food.findOne((err, food) => {
        res.render('index', { title: 'Fuudo',
                              food: food,
                              error: err});
    });
});

module.exports = router;
