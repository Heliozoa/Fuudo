var React = require('react');
var Food = require('../models/food');

function RestaurantLogo(restaurant) {
  return <img src="{restaurant.logo}" alt="{restaurant.name}" height="100" width="300"/>
}

function View(props) {
  return <h1>{props.food.name}</h1>;
}
 
class HelloMessage extends React.Component {
  render() {
    return View(this.props);
  }
};
 
module.exports = HelloMessage;