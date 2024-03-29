import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,  compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App.js';
import Menu from './components/Menu';
import Book from './components/Book';
// import Success from './components/Success';
import NewReviewForm from './components/reviews/ReviewCreation.js';
const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/review/new" element={<NewReviewForm/>} />
      <Route path='/Menu' element={<Menu />} />
      <Route path='/Book' element={<Book/>} />
      {/* <Route path='/Success' element={<Success/>} /> */}
    </Routes>
  </BrowserRouter>
  </Provider>

);
