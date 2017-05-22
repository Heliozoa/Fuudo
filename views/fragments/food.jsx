var React = require('react');

import styles from './styles.js';

var Reviews = require('./reviews');

const center_contents = styles.center_contents;
const restrict_size = styles.restrict_size;
var merge = Object.assign;

function FoodPicture(props) {
  return(
    <div style={merge(center_contents, {'background-color': '#404040', 'height': 256})}>
      <img style={restrict_size} src={"data:image/png;base64,"+props.food.image} alt={props.food.name} />
    </div>
  );
}

function Food(props) {
  return (
    <div style={center_contents}>
      <FoodPicture food={props.food} />
      {'<- prev        next ->'} <br />
      {props.food.name +' '+ Reviews.score(props.food.reviews)}
    </div>
  );
}
 
module.exports = Food;