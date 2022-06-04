import React, { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Header from "./header/Header.js";
import Review from "./reviews/Review.js";





function App() {
  const [ state, setState ] = useState("")

  return (
    <div className="App">
      <Header/>
      <Container maxWidth="sm">
      <Review />
      </Container>
    </div>
  );
}

export default App;
