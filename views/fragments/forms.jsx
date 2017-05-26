const React = require('react');

function RequiredInput(props) {
  return (
    <label>
      {props.label}: <br />
      <input type={props.type} name={props.name} required /> <br />
      <br />
    </label>
  );
}

module.exports = RequiredInput;
