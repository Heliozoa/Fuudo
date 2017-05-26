const React = require('react');

const Layout = require('./fragments/layout');
const RequiredInput = require('./fragments/forms');

function list(restaurants) {
  return restaurants.map((restaurant) =>
    <option key={restaurant._id} value={restaurant._id}>{restaurant.name}</option>
  );
}

function FoodDropdown(props) {
  return (
    <label>
      Food: <br />
      <select name="food">
        {list(props.foods)}
      </select> <br />
      <br />
    </label>
  );
}

function ReviewForm(props) {
  return (
    <Layout>
      <form method="POST" action="/add/review" encType="multipart/form-data">
        <FoodDropdown foods={props.foods} />
        <RequiredInput label="Name" type="text" name="name" />
        <RequiredInput label="Review" type="text" name="message" />
        <RequiredInput label="Image" type="file" name="image" />
        <input type="radio" name="score" value="1" /> 1
        <input type="radio" name="score" value="2" /> 2
        <input type="radio" name="score" value="3" /> 3
        <input type="radio" name="score" value="4" /> 4
        <input type="radio" name="score" value="5" /> 5
        <br />
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  );
}

module.exports = ReviewForm;
