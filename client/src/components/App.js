import React, { useState, useReducer, useEffect } from 'react';
import Container from '@mui/material/Container';
import Header from "./header/Header.js";
import Review from "./reviews/Review.js";

const initialState = {count: 0};

function reducer(state, action){
  switch (action.type) {
    case 'increment':
    return {count: state.count + 1};
    case 'decrement':
    return {count: state.count - 1};
    default:
    return state.count;
  }
}




function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Header/>
      <p> {state.count} </p>
      <button onClick={() => dispatch({type: "increment"})} > + </button>
      <button onClick={() => dispatch({type: 'decrement'})} > - </button>
      <Container maxWidth="sm">
      <Review />
      </Container>
    </div>
  );
}

export default App;
