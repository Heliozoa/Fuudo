import React from 'react';
import { restrictSize } from './styles';

function Avatar({ review }) {
  return (
    <div style={Object.assign({}, { height: '80px', width: '80px', textAlign: 'center' })}>
      <img style={restrictSize} src={'data:image/png;base64,' + review.image} alt={review.name} />
    </div>
  );
}

function Review({ review }) {
  return (
    <div style={{ display: 'table', paddingBottom: 16 }}>
      <Avatar style={{ display: 'table-cell' }} review={review} />
      <div style={{ display: 'table-cell', textAlign: 'Left', paddingLeft: '10px' }}>{review.message}</div>
    </div>
  );
}

module.exports = Review;
