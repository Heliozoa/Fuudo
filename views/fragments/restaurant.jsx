var React = require('react');

import styles from './styles.js';

const center_contents = styles.center_contents;
const restrict_size = styles.restrict_size;
var merge = Object.assign;

function Restaurant(props) {
  return (
    <div style={merge({}, {'height': 128,}, center_contents)}>
     <img style={restrict_size} src={"data:image/png;base64,"+props.restaurant.image} alt={props.restaurant.name} />
    </div>
  );
}
 
module.exports = Restaurant;