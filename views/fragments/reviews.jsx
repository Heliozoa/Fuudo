import React from 'react';
import Review from './review';

function Reviews({ reviews }) {
  return (
    <div>
      {list(reviews)}
    </div>
  );
}

function list(reviews) {
  if(reviews.length == 0){
    return <div>No reviews yet!</div>
  }
  return reviews.map((review) =>
    <Review key={review._id} review={review} />
  );
}

function score(reviews) {
  if(reviews.length == 0){
    return NaN;
  }
  let sum = 0;
  for (let i = 0; i < reviews.length; i += 1) {
    sum += reviews[i].score;
  }
  const points = (sum / reviews.length) * 10;
  return (Math.round(points)) / 10;
}

module.exports = Reviews;
module.exports.score = score;
