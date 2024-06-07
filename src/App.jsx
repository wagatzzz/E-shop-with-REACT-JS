import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WomenPage from './WomenPage';
import MenPage from './MenPage';
import HomePage from './HomePage'; // assuming you have a HomePage component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes using the Route component */}
        <Route path="/" element={<HomePage />} /> {/* Route for the root path */}
        <Route path="/women's clothing/:category" element={<WomenPage />} /> {/* Route for women's clothing */}
        <Route path="/men's clothing/:category" element={<MenPage />} /> {/* Route for men's clothing */}
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
