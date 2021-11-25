import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from 'pages/Landingpage';
import Home from 'pages/Home';

function Root() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Root;
