const React = require('react');

function Selector() {
  return (
    <div style={{ textAlign: 'center' }}>
      <a href="/" style={{ position: 'relative', right: '5%' }}>pass</a>
      <a href="/">like</a>
      <a href="#eat" style={{ position: 'relative', left: '5%' }}>eat</a>
    </div>
  );
}

module.exports = Selector;
