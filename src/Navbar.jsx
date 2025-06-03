import React, { useState } from 'react';
import Back from './assets/back.jpg';
import Menu from './assets/menu.jpg';
import { Link } from 'react-router-dom';

function Nav() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const closeMobileMenu = () => setNav(false);

  return (
    <div className="flex justify-between items-center h-24 bg-gray-600 px-4 relative z-50">
     <Link to="/"><h1 className="text-3xl font-bold font-serif text-white">Lonexa</h1></Link> 

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:gap-6 xl:gap-14 text-white ">
        <Link to="/" onClick={closeMobileMenu}><li className='hover:text-orange-400'>Home</li></Link>
        <Link to="/About" onClick={closeMobileMenu}><li className='hover:text-orange-400'>About us</li></Link>
        <Link to="/Services" onClick={closeMobileMenu}><li className='hover:text-orange-400'>Our Services</li></Link>
        <Link to="/Practice" onClick={closeMobileMenu}><li className='hover:text-orange-400'>Villa Booking</li></Link>
        <Link to="/Gallary" onClick={closeMobileMenu}><li className='hover:text-orange-400'>Gallary</li></Link>
        <Link to="/Login" onClick={closeMobileMenu}><li className='hover:text-orange-400'>Login</li></Link>
      </ul>

      {/* Book Button */}
      <Link to="/Practice"><button className=" md:block bg-orange-400 text-white px-4 py-2 rounded">Book Now</button></Link>

      {/* Mobile Menu Toggle Icon */}
      <div className="md:hidden cursor-pointer z-50" onClick={handleClick}>
        <img className="w-8" src={nav ? Back : Menu} alt="menu toggle" />
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-black text-white transition-transform duration-300 ease-in-out z-40 transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h1 className="text-3xl font-bold font-serif mt-6 ml-4">Lonexa</h1>
        <ul className="pt-8 uppercase">
          <Link to="/" onClick={closeMobileMenu}><li className="p-4 border-b border-white ">Home</li></Link>
          <Link to="/About" onClick={closeMobileMenu}><li className="p-4 border-b border-white">About us</li></Link>
          <Link to="/Services" onClick={closeMobileMenu}><li className="p-4 border-b border-white">Our Services</li></Link>
          <Link to="/Practice" onClick={closeMobileMenu}><li className="p-4 border-b border-white">Villa Booking</li></Link>
          <Link to="/Gallary" onClick={closeMobileMenu}><li className="p-4 border-b border-white">Gallery</li></Link>
          <Link to="/Login" onClick={closeMobileMenu}><li className="p-4 border-b border-white">Login</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
