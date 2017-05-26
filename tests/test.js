import test from 'ava';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Mockgoose = require('mockgoose').Mockgoose;

const mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage().then(function() {
    mongoose.connect('mongodb://localhost/test');
});

const Food = require('../models/food');
const Restaurant = require('../models/restaurant');

test('Adding a food with the necessary fields works.', t => {
  t.plan(1);
  const r = new Restaurant({
            name: 'name',
            image: 'image'});
  r.save();
  const f = new Food({
            name: 'name',
            restaurant: r._id,
            image: 'image'});
  const promise = f.save();
  
  return promise.then(
    () => { t.pass(); },
    () => { t.fail(); },
  );
});

test('Adding a food with the name field missing doesn\'t work.', t => {
  t.plan(1);
  const r = new Restaurant({
            name: 'name',
            image: 'image'});
  r.save();
  const f = new Food({
            restaurant: r._id,
            image: 'image'});
  const promise = f.save();
  
  return promise.then(
    () => { t.fail(); },
    () => { t.pass(); },
  );
});

test('Adding a food with the restaurant field missing doesn\'t work.', t => {
  t.plan(1);
  const f = new Food({
            name: 'name',
            image: 'image'});
  const promise = f.save();
  
  return promise.then(
    () => { t.fail(); },
    () => { t.pass(); },
  );
});

test('Adding a food with the image field missing doesn\'t work.', t => {
  t.plan(1);
  const r = new Restaurant({
            name: 'name',
            image: 'image'});
  r.save();
  const f = new Food({
            name: 'name',
            restaurant: r._id });
  const promise = f.save();
  
  return promise.then(
    () => { t.fail(); },
    () => { t.pass(); },
  );
});
