var express = require('express');
var router = express.Router();

var foodDAO = require('../models/mockFoodDAO');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fuudo',
                        food: foodDAO.getAny()});
});

module.exports = router;
