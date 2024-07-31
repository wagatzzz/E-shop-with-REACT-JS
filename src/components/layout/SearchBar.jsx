import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
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
        className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-white hover:text-black hover:shadow-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
