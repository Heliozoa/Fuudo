var React = require('react');

import styles from './styles.js';

var Reviews = require('./reviews');

const centerContents = styles.centerContents;
const restrictSize = styles.restrictSize;
var merge = Object.assign;

function FoodPicture(props) {
  return(
    <div style={merge({}, centerContents, {backgroundColor: '#a22d2d', height: 256})}>
      <img style={restrictSize} src={"data:image/png;base64,"+props.food.image} alt={props.food.name} />
    </div>
  );
}

function Food(props) {
  return (
    <div style={centerContents}>
      <FoodPicture food={props.food} />
      {props.food.name +' '+ Reviews.score(props.food.reviews)}
    </div>
  );
}
 
module.exports = Food;