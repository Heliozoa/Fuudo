import React from 'react';

function Links() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <a href="/">home</a>
        Add...
        <a href="/add/restaurant">restaurant</a>
        <a href="/add/food">food</a>
        <a href="/add/review">review</a>
      </div>
    </div>
  );
}

module.exports = Links;
