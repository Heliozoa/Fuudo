var React = require('react');

function RestaurantLogo(props) {
  return <img src={"data:image/png;base64,"+props.restaurant.image} alt={props.restaurant.name} height="128" width="512"/>
}

function FoodPicture(props) {
  return <img src={"data:image/png;base64,"+props.food.image} alt={props.food.name} height="256" width="512"/>
}

function Avatar(props){
  return <img src={"data:image/png;base64,"+props.review.image} alt={props.review.name} height="64" width="64"/>
}

function calcscore(reviews){
  var sum = 0;
  for(var i = 0; i < reviews.length; i++){
    sum += reviews[i].score;
  }
  return sum / reviews.length;
}

function Food(props) {
  return (
    <div>
      <FoodPicture food={props.food} /> <br />
      {"<- prev        next ->"} <br />
      {props.food.name} {calcscore(props.food.reviews)}
    </div>
  );
}

function list(reviews){
  return reviews.map((review) =>
    <div>
      <Avatar review={review} />
      {review.message}
    </div>
  );
}

function Reviews(props) {
  return (
    <div>
      {list(props.reviews)}
    </div>
  );
}
 
class View extends React.Component {
  render() {
    return (
      <div>
        <RestaurantLogo restaurant={this.props.restaurant} /> <br />
        <Food food={this.props.food} />
        <Reviews reviews={this.props.reviews} />
      </div>
    );
  }
};
 
module.exports = View;