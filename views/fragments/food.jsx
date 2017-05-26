import React from 'react';
import styles from './styles';
import Reviews from './reviews';

const centerContents = styles.centerContents;
const restrictSize = styles.restrictSize;
const merge = Object.assign;

function FoodPicture({ food }) {
  return (
    <div style={merge({}, centerContents, { backgroundColor: '#a22d2d', height: 256 })}>
      <img style={restrictSize} src={'data:image/png;base64,' + food.image} alt={food.name} />
    </div>
  );
}

function Food({ food }) {
  let score = Reviews.score(food.reviews);
  if(isNaN(score)) score = '--';
  return (
    <div style={centerContents}>
      <FoodPicture food={food} />
      {food.name + ' ' + score}
    </div>
  );
}

module.exports = Food;
