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
    <div className="App" style={{ backgroundColor: 'rgb(218, 215, 205)'}}>
      <Container className='Header' maxWidth="xl" disableGutters={true} >
      <Header/>
      <Container maxWidth="lg">
      <Review />
      </Container>
      </Container>
    </div>
  );
}

export default App;
