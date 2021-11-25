import React from 'react';
import history from '../history';
import LandingPage from 'pages/Landingpage';
import Home from 'pages/Home';
import { Router, Route, Switch, Routes } from 'react-router-dom';
function Root() {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Root;
