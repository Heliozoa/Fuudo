var React = require('react');

function Selector(props) {
  return (
    <div style={{'textAlign': 'center'}}>
      <a href='/' style={{position: 'relative', 'right': '5%'}}>pass</a>
      <a href='/'>like</a>
      <a href='#' style={{position: 'relative', 'left': '5%'}}>eat</a>
    </div>
  );
}
 
module.exports = Selector;