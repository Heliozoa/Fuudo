var React = require('react');

function Selector(props) {
  return (
    <div style={{'textAlign': 'center'}}>
      <a href='/' style={{position: 'relative', 'right': '5%'}}>dislike</a>
      <a href='/' style={{position: 'relative', 'left': '5%'}}>like</a>
    </div>
  );
}
 
module.exports = Selector;