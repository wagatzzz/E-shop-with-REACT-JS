import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import HomePage from './pages/HomePage';
import Jewellery from './pages/Jewellery';
import All from './pages/All';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes using the Route component */}
        <Route path="/" element={<HomePage />} />
        <Route path="/women's clothing" element={<WomenPage />} />
        <Route path="/men's clothing" element={<MenPage />} /> 
        <Route path="/jewelery" element={<Jewellery />} />
        <Route path="/all" element={<All />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
