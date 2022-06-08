import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard.js';
import Box from '@mui/material/Box';

function Review(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(
      (result) => {
        console.log(`These are the results ${result}`);
        setIsLoaded(true);
        setReviews(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])

  if(error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <h1> Reviews </h1>
        {reviews.map( (review, index) => {
          <li key={index}>
            {review.name}
          </li>
        })}
        <ReviewCard />
      </div>
    );
  }
}
export default Review;
