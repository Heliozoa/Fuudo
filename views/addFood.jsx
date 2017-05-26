const React = require('react');

const Layout = require('./fragments/layout');

const RequiredInput = require('./fragments/forms');

function list(restaurants) {
  return restaurants.map((restaurant) =>
    <option key={restaurant._id} value={restaurant._id}>{restaurant.name}</option>
  );
}

function RestaurantDropdown({ restaurants }) {
  return (
    <label>
      Restaurant: <br />
      <select name="restaurant">
        {list(restaurants)}
      </select> <br />
      <br />
    </label>
  );
}

function FoodForm({ restaurants }) {
  return (
    <Layout>
      <form method="POST" action="/add/food" encType="multipart/form-data">
        <RestaurantDropdown restaurants={restaurants} />
        <RequiredInput label="Name" type="text" name="name" />
        <RequiredInput label="Image" type="file" name="image" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  );
}

module.exports = FoodForm;
