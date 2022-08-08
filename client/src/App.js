import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getReviews } from './actions/reviews.js';
import axios from 'axios';
// import Container from '@mui/material/Container';

// import Review from "./components/reviews/Review.js";
// import ReviewForm from "./components/reviews/ReviewCreation.js";

import Home from './pages/Home.js';




const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch])



  return (
    <div style={{ backgroundColor: 'rgb(255,254,254)'}}>
      <Home/>
      {/* <Review /> */}
    </div>
  );
}

export default App;


const styles = {

}


