import test from 'ava';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Mockgoose = require('mockgoose').Mockgoose;

const mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage().then(function() {
    mongoose.connect('mongodb://localhost/test');
});

const Review = require('../models/review');

function validReview() {
  return new Review({
    name: 'name',
    message: 'message',
    image: 'image',
    score: 0,
  });
}

test('Adding a review with the necessary fields works.', t => {
  t.plan(1);
  const r = validReview();
  
  return r.save().then(
    () => { t.pass(); },
    () => { t.fail(); },
  );
});

test('Adding a review with the name field missing doesn\'t work.', t => {
  t.plan(1);
  const r = validReview();
  r.name = undefined;

  return r.save().then(
    () => { t.fail(); },
    () => { t.pass(); },
  );
});

test('Adding a review with the message field missing doesn\'t work.', t => {
  t.plan(1);
  const r = validReview();
  r.message = undefined;
  
  return r.save().then(
    () => { t.fail(); },
    () => { t.pass(); },
  );
});

test('Adding a review with the image field missing doesn\'t work.', t => {
  t.plan(1);
  const r = validReview();
  r.image = undefined;
  
  return r.save().then(
    () => { t.fail(); },
    () => { t.pass(); },
  );
});

test('Adding a review with the score field missing doesn\'t work.', t => {
  t.plan(1);
  const r = validReview();
  r.score = undefined;
  
  return r.save().then(
    () => { t.fail(); },
    () => { t.pass(); },
  );
});
