import React, {  } from 'react';
import { useSelector } from 'react-redux';
import ReviewCard from './ReviewCard.js';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'






function Review(){
    const reviews = useSelector((state) => state.reviews);
    console.log(reviews)

  return (
    <div>
      <Typography align="center" variant="h3"> Reviews </Typography>
      <Carousel>
      {reviews.map((review, index) => {
           return <ReviewCard review={review} key={index} />
      })}
      </Carousel>
    </div>
  );
}
export default Review;
