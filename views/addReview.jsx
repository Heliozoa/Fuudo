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

function FoodDropdown(props) {
  return(
    <label>
      Food: <br />
      <select name="food">
        {list(props.foods)}
      </select> <br />
      <br />
    </label>
  );
}

function list(foods) {
  return foods.map((food) =>
    <option key={food._id} value={food._id}>{food.name}</option>
  );
}

class ReviewForm extends React.Component {
  render() {
    return (
      <form method="POST" action="/add/review" encType="multipart/form-data">
        <FoodDropdown foods={this.props.foods} />
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
    );
  }
};
 
module.exports = ReviewForm;