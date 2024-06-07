import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar({ category }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-row justify-between px-4 bg-white h-24 items-center">
      <div className="flex flex-row items-center">
        <FontAwesomeIcon icon={faBagShopping} className="text-4xl" style={{ color: 'orangered' }} />
        <h1 className="text-4xl font-bold ml-2">CLOJEWLS</h1>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:border-b border-transparent hover:border-red-300">Shop</Link>
        <Link to={`/women's%20clothing/${encodeURIComponent(category)}`} className="hover:border-b border-transparent hover:border-red-300">Women</Link>
        <Link to="/men's clothing/:category" className="hover:border-b border-transparent hover:border-red-300">Men</Link>
        <Link to="/jewellery" className="hover:border-b border-transparent hover:border-red-300">Jewellery</Link>
      </nav>

      <div className="hidden md:flex items-center gap-6">
        <button id="loginButton" className="bg-orange-500 rounded-full w-32 h-10 text-white hover:bg-white hover:text-black hover:shadow-md">Login</button>
        <div className="relative">
          <FontAwesomeIcon id="cartIcon" icon={faCartShopping} className="text-3xl" />
          <span id="cartCount" className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">0</span>
        </div>
      </div>

      <div className="md:hidden">
        <FontAwesomeIcon onClick={toggleNavbar} id="menu-toggle" icon={faBars} className="text-3xl" aria-label="Menu" />
      </div>

      {/* Mobile View */}
      <div id="mobile-menu" className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-red-50 w-full absolute top-0 right-0 z-50`}>
        <div className="flex flex-col items-center py-8 h-screen">
          {/* Exit Button */}
          <button onClick={toggleNavbar} className="text-black focus:outline-none mb-4" aria-label="Close Menu">
            <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
          </button>
          <div className="flex flex-col items-center gap-4">
            <Link to="/" className="hover:border-b border-transparent hover:border-red-300">Shop</Link>
            <Link to={`/women's clothing/${encodeURIComponent(category)}`} className="hover:border-b border-transparent hover:border-red-300">Women</Link>
            <Link to="/men's clothing/:category" className="hover:border-b border-transparent hover:border-red-300">Men</Link>
            <Link to="/jewellery" className="hover:border-b border-transparent hover:border-red-300">Jewellery</Link>
            <button id="loginButtonMobile" className="border border-black w-24 rounded-full hover:bg-red-50 mt-4">Login</button>
            <FontAwesomeIcon icon={faCartShopping} className="text-3xl mt-4" aria-label="Cart" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
