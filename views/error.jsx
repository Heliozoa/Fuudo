const React = require('react');

function ErrorMessage(props) {
  return (
    <div>
      {props.error.name} <br />
      {props.error.message} <br />
    </div>
  );
}

module.exports = ErrorMessage;
