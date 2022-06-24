import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReviewCard from './ReviewCard.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'


// const delay = 2500;




function Review(){
    const reviews = useSelector((state) => state.reviews);

  return (
    <div>
      <Typography align="center" variant="h2"> Reviews </Typography>
      <Carousel>
      {reviews.map((review, index) => {
           return <ReviewCard review={review} key={index} />
      })}
      </Carousel>
    </div>
  );
}
export default Review;
