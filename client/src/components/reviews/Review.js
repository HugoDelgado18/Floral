import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import ReviewCard from './ReviewCard.js';
import Box from '@mui/material/Box';

function Review(){
    const reviews = useSelector((state) => state.reviews)

    console.log(reviews)

  return (
    <div>
      <h1> Reviews </h1>
      <ReviewCard />
    </div>
  );
}
export default Review;
