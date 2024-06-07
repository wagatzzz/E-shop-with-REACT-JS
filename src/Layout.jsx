import React from 'react';
import { useParams } from 'react-router-dom'; // Importing useParams to access URL parameters
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { category } = useParams(); // Getting the category parameter from React Router

  return (
    <div>
      <Navbar category={category} /> {/* Passing category as a prop to Navbar */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
