import React from 'react';
import styles from './styles';

const centerContents = styles.centerContents;
const restrictSize = styles.restrictSize;
const merge = Object.assign;

function Restaurant({ restaurant }) {
  return (
    <div style={merge({}, { height: 128 }, centerContents)}>
      <img style={restrictSize} src={'data:image/png;base64,' + restaurant.image} alt={restaurant.name} />
    </div>
  );
}

module.exports = Restaurant;
