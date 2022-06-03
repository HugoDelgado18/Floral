import React from 'react';
import ReviewCard from './ReviewCard.js';
import ReviewCreation from "./ReviewCreation.js";

function Review(){
  return (
    <div>
      <h1> Reviews </h1>
      <ReviewCard />
      <ReviewCreation />
    </div>
  );
}
export default Review;
