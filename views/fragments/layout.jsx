var React = require('react');

var Links = require('./links')

import constants from './constants.js';
const app_w = constants.app_w;

function Layout(props) {
  return (
    <div style={{'width': app_w}}>
      <Links />
      {props.children}
    </div>
  );
}
 
module.exports = Layout;