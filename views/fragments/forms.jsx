const React = require('react');

function RequiredInput({ label, type, name }) {
  return (
    <label>
      {label}: <br />
      <input type={type} name={name} required /> <br />
      <br />
    </label>
  );
}

module.exports = RequiredInput;
