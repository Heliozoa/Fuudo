var React = require('react');

import styles from './fragments/styles.js';
import constants from './fragments/constants.js';

var Reviews = require('./fragments/reviews');
var Restaurant = require('./fragments/restaurant');
var Food = require('./fragments/food');

const app_w = constants.app_w;
 
class View extends React.Component {
  render() {
    return (
      <div style={{'width': app_w}}>
        <Restaurant restaurant={this.props.restaurant} /> <br />
        <Food food={this.props.food} /> <br />
        <Reviews reviews={this.props.reviews} />
      </div>
    );
  }
};
 
module.exports = View;