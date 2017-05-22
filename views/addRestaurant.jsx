var React = require('react');

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
      <form method="POST" action="/add/restaurant" encType="multipart/form-data">
        <RequiredInput label="Name" type="text" name="name" />
        <RequiredInput label="Image" type="file" name="image" />
        <br />
        <RequiredInput type="submit" value="Submit" />
      </form>        
    );
  }
};
 
module.exports = RestaurantForm;