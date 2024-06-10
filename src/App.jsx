import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WomenPage from './WomenPage';
import MenPage from './MenPage';
import HomePage from './HomePage';
import Jewellery from './Jewellery';
import All from './All';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes using the Route component */}
        <Route path="/" element={<HomePage />} /> {/* Route for the root path */}
        <Route path="/women's clothing" element={<WomenPage />} />
        <Route path="/men's clothing" element={<MenPage />} /> 
        <Route path="/jewelery" element={<Jewellery />} />
        <Route path="/all" element={<All />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
