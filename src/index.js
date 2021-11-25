import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'assets/css/App.css';

import reportWebVitals from './reportWebVitals';
import Root from 'routes';

import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <Root />
    <ToastContainer transition='slide' limit={3} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
