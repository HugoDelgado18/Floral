import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReviewCard from './ReviewCard.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Slide from '@mui/material/Slide';


const delay = 2500;

const handleChange = () => {

}

let reveal = 'hidden';

function Review(){
    const reviews = useSelector((state) => state.reviews)
    const [current, setCurrent] = useState(0);
    const [test, setTest] = useState(reviews);
    const timeoutRef = React.useRef(null);
    const length = reviews.length;

function resetTimeout() {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }
}

useEffect(() => {
  resetTimeout();
  timeoutRef.current = setTimeout(
    () =>
    setCurrent((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    ),
    delay
  );

  return () => {
    resetTimeout();
  };
}, [current]);


  return (
    <div>
      <Box sx={{ left: '25%'  }}>
      <Typography align="center" variant="h2"> Reviews {current} </Typography>
      <ArrowBackIosNewOutlinedIcon className='left-arrow' onClick={() => setCurrent(current - 1)} />
      <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative', justifyContent: 'center' }} >
      {reviews.map((review, index) => {
           return <ReviewCard position={current} review={review} key={index} />
      })}
      </Box>
      <ArrowForwardIosOutlinedIcon className='right-arrow' onClick={() => setCurrent(current + 1)} />
      </Box>
    </div>
  );
}
export default Review;
