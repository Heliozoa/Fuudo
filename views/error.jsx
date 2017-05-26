const React = require('react');

function ErrorMessage({ error }) {
  return (
    <div>
      {error.name} <br />
      {error.message} <br />
    </div>
  );
}

module.exports = ErrorMessage;
