import test from 'ava';

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage().then(function() {
    mongoose.connect('mongodb://localhost/test');
});

var Food = require('../models/food');

test('Adding a food with the necessary fields works.', t => {
  t.plan(1);
  var f = new Food({
            name: 'mem',
            restaurant: 'pg',
            image: 'pep'});
  var promise = f.save();
  
  return promise.then(
    () => {t.pass();},
    () => {t.fail();}
  );
});

test('Adding a food with the name field missing doesn\'t work.', t => {
  t.plan(1);
  var f = new Food({
            image: 'mem',
            restaurant: 'pg'});
  var promise = f.save();
  
  return promise.then(
    () => {t.fail();},
    () => {t.pass();}
  );
});

test('Adding a food with the restaurant field missing doesn\'t work.', t => {
  t.plan(1);
  var f = new Food({
            name: 'mem',
            image: 'pg'});
  var promise = f.save();
  
  return promise.then(
    () => {t.fail();},
    () => {t.pass();}
  );
});

test('Adding a food with the image field missing doesn\'t work.', t => {
  t.plan(1);
  var f = new Food({
            name: 'mem',
            restaurant: 'pg'});
  var promise = f.save();
  
  return promise.then(
    () => {t.fail();},
    () => {t.pass();}
  );
});
