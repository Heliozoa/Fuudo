var React = require('react');

var Links = require('./links')

import constants from './constants.js';
const appW = constants.appW;

function Layout(props) {
  return (
    <div style={{width: appW}}>
      <Links />
      {props.children}
    </div>
  );
}
 
module.exports = Layout;