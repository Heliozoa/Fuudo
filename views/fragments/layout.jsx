import React from 'react';
import Links from './links';
import constants from './constants';

const appW = constants.appW;

function Layout({ children }) {
  return (
    <div style={{ width: appW }}>
      <Links />
      {children}
    </div>
  );
}

module.exports = Layout;
