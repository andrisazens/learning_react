import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import App from "./Lifecycle";
import './index.css';

ReactDOM.render(
  <App cat={5} txt="this is our prop text" />,    
  document.getElementById('root')
);
