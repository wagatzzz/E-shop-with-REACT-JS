import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping} from '@fortawesome/free-solid-svg-icons';


function Footer() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    console.log('Subscribed with email:', email);
  };

  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%' }} className="bg-red-100 shadow-md rounded-md">
    <div className="justify-center items-center mt-4 flex flex-col">
      <p className="text-sm md:text-base lg:text-lg mt-6 text-gray-600">
          Subscribe to our newsletter to stay updated!
        </p>
        <form onSubmit={handleSubmit} className="flex items-center mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            className="rounded-l-lg px-4 py-2 border border-gray-300 focus:outline-none focus:border-black"
          />
          <button
            type="submit"
            className="rounded-r-lg px-4 py-2 bg-black text-white hover:bg-white hover:text-black hover:shadow-md"
          >
            Subscribe
          </button>
        </form>
        <div className="flex flex-row items-center mt-12">
        <FontAwesomeIcon icon={faBagShopping} className="text-4xl" style={{ color: 'orangered' }} />
          <h1 className="text-2xl font-bold">CLOJEWLS</h1>
        </div>
        <ul className="md:flex flex items-center gap-6 mt-4">
          <li>
            <a className="hover:border-b border-transparent hover:border-red-300 text-gray-600" href="#">
              Company
            </a>
          </li>
          <li>
            <a className="hover:border-b border-transparent hover:border-red-300 text-gray-600" href="#">
              Shop
            </a>
          </li>
          <li>
            <a className="hover:border-b border-transparent hover:border-red-300 text-gray-600" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:border-b border-transparent hover:border-red-300 text-gray-600" href="#">
              Contact
            </a>
          </li>
        </ul>
        {/* 
<div className="md:flex flex items-center gap-6 mt-4 mb-4">
  <a href="">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="">
    <FontAwesomeIcon icon={faXTwitter} />
  </a>
  <a href="">
    <FontAwesomeIcon icon={faWhatsapp} />
  </a>
</div>
*/}

      </div>
      <div className="flex justify-center items-center text-gray-600">
        <p>Copyright {/* <FontAwesomeIcon icon={faAt} />*/} 2023 - All Rights Reserved.</p>
    </div>
    </footer>
  );
}

export default Footer;
