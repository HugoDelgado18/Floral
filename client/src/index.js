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
import NewReviewForm from './components/reviews/ReviewCreation.js';
const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  {/* <BrowserRouter> */}
    {/* <Routes> */}
      {/* <Route path="/" element={<App />} /> */}
      {/* <Route path="/review/new" element={<NewReviewForm/>} />
    </Routes>
  </BrowserRouter> */}
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
