import React, { useState } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';

const Layout = ({ children, showBanner }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search logic here, e.g., navigate to a search results page or filter items
    console.log('Search query:', searchQuery);
  };

  return (
    <div>
      <Navbar />
      {showBanner && (
        <>
          <Banner />
          <div className="p-4 bg-gray-100">
            <form onSubmit={handleSearchSubmit} className="flex justify-center mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="p-2 border border-gray-300 rounded-l-md"
                placeholder="Search for items"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-r-md"
              >
                Search
              </button>
            </form>
          </div>
        </> 
      )}
      
      <div className="p-4 bg-gray-100">{children}</div>
      <Footer />
    </div>
    
  );
};

export default Layout;
