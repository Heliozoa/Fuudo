var React = require('react');

var Layout = require('./fragments/layout');
 
function RequiredInput(props) {
  return (
    <label>
      {props.label}: <br />
      <input type={props.type} name={props.name} required /> <br />
      <br />
    </label>
  );
}

function RestaurantDropdown(props) {
  return(
    <label>
      Restaurant: <br />
      <select name="restaurant">
        {list(props.restaurants)}
      </select> <br />
      <br />
    </label>
  );
}

function list(restaurants) {
  return restaurants.map((restaurant) =>
    <option key={restaurant._id} value={restaurant._id}>{restaurant.name}</option>
  );
}

class FoodForm extends React.Component {
  render() {
    return (
      <Layout>
        <form method="POST" action="/add/food" encType="multipart/form-data">
          <RestaurantDropdown restaurants={this.props.restaurants} />
          <RequiredInput label="Name" type="text" name="name" />
          <RequiredInput label="Image" type="file" name="image" />
          <br />
          <input type="submit" value="Submit" />
        </form>      
      </Layout>  
    );
  }
};
 
module.exports = FoodForm;