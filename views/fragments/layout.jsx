import React from 'react';
import Links from './links';
import constants from './constants';

const appW = constants.appW;

function Layout(props) {
  return (
    <div style={{ width: appW }}>
      <Links />
      {props.children}
    </div>
  );
}

module.exports = Layout;
