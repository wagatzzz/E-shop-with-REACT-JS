import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/all');
  };

  return (
    <div className="bg-red-300 text-white p-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-center">
        <h2 className="text-2xl font-bold mr-4">FLAT 50% OFF</h2>
        <p className="text-lg">10 Hours 30 Mins</p>
      </div>
      <button onClick={handleExploreClick} className="explore bg-orange-500 rounded-md w-32 h-10 text-white hover:bg-white hover:text-black hover:shadow-md">Explore Now</button>

    </div>
  );
};

export default Banner;
