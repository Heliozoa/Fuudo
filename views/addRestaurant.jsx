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
 
class RestaurantForm extends React.Component {
  render() {
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
};
 
module.exports = RestaurantForm;