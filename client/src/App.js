import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getReviews } from './actions/reviews.js';
import axios from 'axios';
import Container from '@mui/material/Container';
import Header from "./components/header/Header.js";
import Review from "./components/reviews/Review.js";
import ReviewForm from "./components/reviews/ReviewCreation.js";




const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch])



  return (
    <div className="App">
      <Container className='Header'>
      <Header/>
      <Container maxWidth="sm">
      <Review />
      </Container>
      </Container>
    </div>
  );
}

export default App;
