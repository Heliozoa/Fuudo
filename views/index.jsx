import React from 'react';

import Food from './fragments/food';
import Layout from './fragments/layout';
import Restaurant from './fragments/restaurant';
import Reviews from './fragments/reviews';
import Selector from './fragments/selector';

function View({ restaurant, food, reviews }) {
  return (
    <Layout>
      <Restaurant restaurant={restaurant} /> <br />
      <Food food={food} />
      <Selector />
      <Reviews reviews={reviews} />
    </Layout>
  );
}

module.exports = View;
