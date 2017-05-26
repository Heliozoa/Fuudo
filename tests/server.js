import test from 'ava';
const request = require('supertest');
const app = require('../app');
const Food = require('../models/food');
const Restaurant = require('../models/restaurant');

function validRestaurant() {
  const r = new Restaurant({
    name: 'restaurant',
    image: 'restaurantImg',
  });
  return r;
}

function validFood() {
  const r = validRestaurant();
  r.save();
  return new Food({
    name: 'food',
    restaurant: r._id,
    image: 'foodImg',
  });
  return f;
}

test.beforeEach(t => {
  Food.remove({}, (err) => {});
  Restaurant.remove({}, (err) => {});
});

test('index returns OK with no foods added', async t => {
  t.plan(1);
  const res = await request(app)
    .get('/');

  t.is(res.status, 200);
});

test('index returns OK with a food added', async t => {
  t.plan(1);
  const f = validFood();
  await f.save();
  const res = await request(app)
    .get('/');

  t.is(res.status, 200);
});

test('other paths return OK', async t => {
  t.plan(3);
  const res1 = await request(app)
    .get('/add/food');
  t.is(res1.status, 200);

  const res2 = await request(app)
    .get('/add/restaurant');
  t.is(res2.status, 200);

  const res3 = await request(app)
    .get('/add/review');

  t.is(res3.status, 200);
});

test('successfully adding restaurant returns OK', async t => {
  t.plan(1);
  const res = await request(app)
    .post('/add/restaurant')
    .type('form')
    .field('name', 'name')
    .attach('image', 'tests/test.png');

  t.is(res.status, 200);
});

test('successfully adding food returns OK', async t => {
  t.plan(1);
  const r = validRestaurant();
  r.save();
  const res = await request(app)
    .post('/add/food')
    .type('form')
    .field('name', 'name')
    .field('restaurant', r._id.toString())
    .attach('image', 'tests/test.png');

  t.is(res.status, 200);
});

test('successfully adding review returns OK', async t => {
  t.plan(1);
  const f = validFood();
  f.save();
  const res = await request(app)
    .post('/add/review')
    .type('form')
    .field('name', 'name')
    .field('message', 'message')
    .field('score', 1)
    .field('food', f._id.toString())
    .attach('image', 'tests/test.png');

  t.is(res.status, 200);
});

test('successfully adding food updates the restaurant\'s food list', async t => {
  t.plan(1);
  const r = validRestaurant();
  r.save();
  await request(app)
    .post('/add/food')
    .type('form')
    .field('name', 'name')
    .field('restaurant', r._id.toString())
    .attach('image', 'tests/test.png');
  await Restaurant.findById(r._id, (err, restaurant) => {
    t.is(restaurant.foods.length, 1);
  });
});

test('successfully adding review updates the food\'s review list', async t => {
  t.plan(1);
  const f = validFood();
  f.save();
  await request(app)
    .post('/add/review')
    .type('form')
    .field('name', 'name')
    .field('message', 'message')
    .field('score', 1)
    .field('food', f._id.toString())
    .attach('image', 'tests/test.png');

  await Food.findById(f._id, (err, food) => {
    t.is(food.reviews.length, 1);
  });
});

test('404 everything else', async t => {
  t.plan(1);
  const res = await request(app)
    .get('/abcd');

  t.is(res.status, 404);
});