var React = require('react');

import styles from './styles.js';

const centerContents = styles.centerContents;
const restrictSize = styles.restrictSize;
var merge = Object.assign;

function Restaurant(props) {
  return (
    <div style={merge({}, {height: 128,}, centerContents)}>
     <img style={restrictSize} src={"data:image/png;base64,"+props.restaurant.image} alt={props.restaurant.name} />
    </div>
  );
}
 
module.exports = Restaurant;