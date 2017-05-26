const React = require('react');

const Layout = require('./fragments/layout');

const RequiredInput = require('./fragments/forms');

function RestaurantForm() {
  return (
    <Layout>
      <form method="POST" action="/add/restaurant" encType="multipart/form-data">
        <RequiredInput label="Name" type="text" name="name" />
        <RequiredInput label="Image" type="file" name="image" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  );
}

module.exports = RestaurantForm;
