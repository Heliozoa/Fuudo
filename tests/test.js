import test from 'ava';

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage().then(function() {
    mongoose.connect('mongodb://localhost/test');
});

var Food = require('../models/food');
var Restaurant = require('../models/restaurant');

test('Adding a food with the necessary fields works.', t => {
  t.plan(1);
  var r = new Restaurant({
            name: 'name',
            image: 'image'});
  r.save();
  var f = new Food({
            name: 'name',
            restaurant: r._id,
            image: 'image'});
  var promise = f.save();
  
  return promise.then(
    () => {t.pass();},
    () => {t.fail();}
  );
});

test('Adding a food with the name field missing doesn\'t work.', t => {
  t.plan(1);
  var r = new Restaurant({
            name: 'name',
            image: 'image'});
  r.save();
  var f = new Food({
            restaurant: r._id,
            image: 'image'});
  var promise = f.save();
  
  return promise.then(
    () => {t.fail();},
    () => {t.pass();}
  );
});

test('Adding a food with the restaurant field missing doesn\'t work.', t => {
  t.plan(1);
  var f = new Food({
            name: 'name',
            image: 'image'});
  var promise = f.save();
  
  return promise.then(
    () => {t.fail();},
    () => {t.pass();}
  );
});

test('Adding a food with the image field missing doesn\'t work.', t => {
  t.plan(1);
  var r = new Restaurant({
            name: 'name',
            image: 'image'});
  r.save();
  var f = new Food({
            name: 'name',
            restaurant: r._id,
  var promise = f.save();
  
  return promise.then(
    () => {t.fail();},
    () => {t.pass();}
  );
});
