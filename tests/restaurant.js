import test from 'ava';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Mockgoose = require('mockgoose').Mockgoose;

const mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage().then(function() {
    mongoose.connect('mongodb://localhost/test');
});

const Restaurant = require('../models/restaurant');

function validRestaurant() {
  return new Restaurant({
    name: 'name',
    image: 'image',
  });
}

test('Adding a restaurant with the necessary fields works.', t => {
  t.plan(1);
  const r = validRestaurant();
  
  return r.save().then(
    () => { t.pass(); },
    () => { t.fail(); },
  );
});

test('Adding a restaurant with the name field missing doesn\'t work.', t => {
  t.plan(1);
  const r = validRestaurant();
  r.name = undefined;

  return r.save().then(
    () => { t.fail(); },
    () => { t.pass(); },
  );
});

test('Adding a restaurant with the image field missing doesn\'t work.', t => {
  t.plan(1);
  const r = validRestaurant();
  r.image = undefined;
  
  return r.save().then(
    () => { t.fail(); },
    () => { t.pass(); },
  );
});
