import React, { useState, useRef, useReducer } from 'react';
import { useSelector } from 'react-redux';
import ReviewCard from './ReviewCard.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Slide from '@mui/material/Slide';

const initialState = { count: 0 };

function reducer(state, action) {
  switch(action.type){
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const handleChange = () => {

}

let reveal = 'hidden';

function Review(){
    const reviews = useSelector((state) => state.reviews)
    const [current, setCurrent] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState)
    const length = reviews.length;

  return (
    <div>
      <Box sx={{ width: "100%", height: '20%' }}>
      <Typography align="center" variant="h2"> Reviews </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative', justifyContent: 'center' }}>
      <ArrowBackIosNewOutlinedIcon className='left-arrow' onClick={handleChange} />
      {reviews.map((review, index) => {
           return <ReviewCard style={ index !== state ? {display:'none'} : ''  }  review={review} key={index} />
      })}
      <ArrowForwardIosOutlinedIcon className='right-arrow' />
      </Box>
      </Box>
    </div>
  );
}
export default Review;
