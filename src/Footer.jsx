import React from 'react';
import { Link } from 'react-router-dom';
import Lonavala from './assets/lonavala.jpg';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto text-center mb-10 px-4">
        <p className="text-2xl md:text-3xl font-semibold font-serif leading-snug">
          Luxury villas designed for your ultimate relaxation and privacy.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start px-4">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold font-serif mb-4 text-orange-400">Lonexa</h2>
          <p className="text-base mb-2">📍 Plot No. 51, Silver Lake Valley, Near Pine Ridge Trail, East Lonavala, Maharashtra 410401</p>
          <p className="text-base mb-2">📧 lonexavilla@gmail.com</p>
          <p className="text-base">📞 +91-9322413836</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-orange-400">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-3 text-base">
            <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
            <li><Link to="/About" className="hover:text-orange-400 transition">About Us</Link></li>
            <li><Link to="/Services" className="hover:text-orange-400 transition">Our Services</Link></li>
            <li><Link to="/Practice" className="hover:text-orange-400 transition">Villa Booking</Link></li>
            <li><Link to="/Gallary" className="hover:text-orange-400 transition">Gallery</Link></li>
            <li><Link to="/Content" className="hover:text-orange-400 transition">Login</Link></li>
          </ul>
        </div>

        {/* Image */}
        <div className="w-full h-56 md:h-64 overflow-hidden rounded-lg shadow-lg border border-orange-400">
          <img
            src={Lonavala}
            alt="Lonavala"
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10">
        &copy; 2025 <span className="text-orange-400">Lonexa</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
