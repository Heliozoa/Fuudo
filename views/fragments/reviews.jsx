var React = require('react');

import constants from './constants.js';
import styles from './styles.js';

const app_w = constants.app_w;
const restrictSize = styles.restrictSize;

function Reviews(props) {
  return (
    <div>
      {list(props.reviews)}
    </div>
  );
}

function Avatar(props){
  return (
    <div style={Object.assign({}, props.style, {height: '80', width: '80', textAlign: 'center'})}>
      <img style={restrictSize} src={"data:image/png;base64,"+props.review.image} alt={props.review.name} />
    </div>
  );
}

function list(reviews){
  return reviews.map((review) =>
    <div style={{display: 'table', width: app_w, paddingBottom: 16}}>
      <Avatar style={{display: 'table-cell'}} review={review} />
      <div style={{display: 'table-cell', textAlign: 'Left', paddingLeft: '10px'}}>{review.message}</div>
    </div>
  );
}


function score(reviews){
  var sum = 0;
  for(var i = 0; i < reviews.length; i++){
    sum += reviews[i].score;
  }
  var score = (sum / reviews.length) * 10;
  return (Math.round(score))/10;
}

module.exports = Reviews;
module.exports.score = score;