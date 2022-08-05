import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getReviews } from './actions/reviews.js';
import axios from 'axios';
import Container from '@mui/material/Container';
import Header from "./components/Header.js";
import Review from "./components/reviews/Review.js";
// import ReviewForm from "./components/reviews/ReviewCreation.js";
import OrderHome from "./components/OrderHome.js"
import AboutBox from './components/AboutBox.js';





const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch])



  return (
    <div style={{ backgroundColor: 'rgb(255,254,254)'}}>
      <Header/>
      <OrderHome />
      <AboutBox />
      <Container maxWidth="lg">
      <Review />
      </Container>

    </div>
  );
}

export default App;


const styles = {

}


