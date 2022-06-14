import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Step 1: creating store here
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
// Step 6: Let's provide the store data to the whole app
import { Provider } from 'react-redux'; 

import logger from 'redux-logger'; // npm i redux-logger 
import thunk from 'redux-thunk';  //npm i redux-thunk
// Step 14: use redux-thunk middleware for async actions

// Step 2: Exec createStore() function and save it in a variable 
const store = createStore(rootReducer, applyMiddleware(thunk, logger)); //this needs a special param called 'reducer'
// Step 5: Let's pass the rootReducer to createStore() -- the above line


console.log(store);

ReactDOM.render(
  <React.StrictMode>
    {/* Step 6 continues ... Let's provide the store data */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
