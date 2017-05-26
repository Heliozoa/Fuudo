import React from 'react';
import { restrictSize } from './styles';

function Avatar(props) {
  return (
    <div style={Object.assign({}, props.style, { height: '80px', width: '80px', textAlign: 'center' })}>
      <img style={restrictSize} src={'data:image/png;base64,' + props.review.image} alt={props.review.name} />
    </div>
  );
}

function Review(props) {
  return (
    <div style={{ display: 'table', paddingBottom: 16 }}>
      <Avatar style={{ display: 'table-cell' }} review={props.review} />
      <div style={{ display: 'table-cell', textAlign: 'Left', paddingLeft: '10px' }}>{props.review.message}</div>
    </div>
  );
}

module.exports = Review;
