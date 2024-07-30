import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import SearchBar from './SearchBar';

const Layout = ({ children, showBanner, onSearch }) => {
  return (
    <div className="bg-red-50 min-h-screen">
      <Navbar />
      {showBanner && (
        <>
          <div className="m-4"> 
            <Banner />
          </div>
          <div className="p-4">
            <SearchBar onSearch={onSearch} />
          </div>
        </>
      )}
      <div className="p-4">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
