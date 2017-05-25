var React = require('react');

import styles from './fragments/styles.js';

var Reviews = require('./fragments/reviews');
var Restaurant = require('./fragments/restaurant');
var Food = require('./fragments/food');
var Selector = require('./fragments/selector');
var Layout = require('./fragments/layout');

 
class View extends React.Component {
  render() {
    return (
      <Layout>
        <Restaurant restaurant={this.props.restaurant} /> <br />
        <Food food={this.props.food} />
        <Selector />
        <Reviews reviews={this.props.reviews} />
      </Layout>
    );
  }
};
 
module.exports = View;