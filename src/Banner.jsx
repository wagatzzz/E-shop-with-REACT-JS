import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/all');
  };

  return (
    <div className="bg-red-500 text-white p-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-center">
        <h2 className="text-2xl font-bold mr-4">FLAT 50% OFF</h2>
        <p className="text-lg">10 Hours 30 Mins</p>
      </div>
      <button
        onClick={handleExploreClick}
        className="bg-white text-red-500 font-bold py-2 px-4 rounded mt-4 md:mt-0"
      >
        Explore Now
      </button>
    </div>
  );
};

export default Banner;
