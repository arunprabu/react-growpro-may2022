// node_module imports
import React from 'react'; // official react library
import ReactDOM from 'react-dom'; // react-dom package for working with the DOM.

//custom imports
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// using React DOM package
// app comp is rendered into an element that has id root
ReactDOM.render(
  <div>
    <App />
  </div>
, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
