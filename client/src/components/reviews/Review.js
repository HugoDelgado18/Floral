import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import ReviewCard from './ReviewCard.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';



function Review(){
    const reviews = useSelector((state) => state.reviews)
    const [current, setCurrent] = useState(0);
    const length = reviews.length;

  return (
    <div>
      <Box sx={{ width: "100%", height: '20%' }}>
      <Typography align="center" variant="h2"> Reviews </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative', justifyContent: 'center' }}>
      <ArrowBackIosNewOutlinedIcon className='left-arrow' />
      {reviews.map((review, index) => {
           return <ReviewCard className='review'  review={review} key={index} />
      })}
      <ArrowForwardIosOutlinedIcon className='right-arrow' />
      </Box>
      </Box>
    </div>
  );
}
export default Review;
