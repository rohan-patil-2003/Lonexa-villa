import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Food from './assets/food.jpg';
import Wellness from './assets/wellness-sanctuary.jpg';
import Cleaner from './assets/cleaning.jpg';

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="pb-20">
      {/* Top Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mt-10 px-4" data-aos="fade-up">
        <div className="p-4">
          <img className="w-full max-w-[224px] h-56 rounded-full mx-auto object-cover" src={Food} alt="Delicious Food" />
          <h1 className="font-bold text-xl text-black mt-4">Delicious Food</h1>
          <p className="mt-2 text-gray-700">
            At our villa, we believe a perfect stay includes unforgettable flavors. Whether you crave traditional home-cooked meals, exotic delicacies, or fresh organic options, our food services are designed to delight your taste buds.
          </p>
        </div>
        <div className="p-4">
          <img className="w-full max-w-[224px] h-56 rounded-full mx-auto object-cover" src={Wellness} alt="Wellness Features" />
          <h1 className="font-bold text-xl text-black mt-4">Water & Wellness Features</h1>
          <p className="mt-2 text-gray-700">
            Beyond a private pool, our villas can include luxurious amenities like jacuzzis, fountains, steam rooms, saunas, and recreational features – offering you the ultimate relaxation experience.
          </p>
        </div>
        <div className="p-4">
          <img className="w-full max-w-[224px] h-56 rounded-full mx-auto object-cover" src={Cleaner} alt="Maintenance" />
          <h1 className="font-bold text-xl text-black mt-4">Maintenance</h1>
          <p className="mt-2 text-gray-700">
            Our team ensures the villa remains in pristine condition with top-notch maintenance – from pool care and garden upkeep to cleanliness and utility management.
          </p>
        </div>
      </div>

      {/* Explore Services Section */}
      <div className="px-4 py-14 bg-slate-100">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-black">Explore our Services</h2>
          <p className="text-lg text-gray-700 mt-2">Enjoy luxury, comfort, and personalized experiences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" data-aos="fade-up">
          {[
            { icon: '🏊', title: 'Private Pool', desc: 'Relax in your personal pool any time of day.' },
            { icon: '🛏️', title: 'Luxury Bedrooms', desc: 'Spacious rooms with elegant interiors.' },
            { icon: '👨‍🍳', title: 'In-Villa Dining', desc: 'Personal chef options and curated menus.' },
            { icon: '🛎️', title: '24/7 Concierge', desc: 'We’re always ready to assist you.' },
            { icon: '📶', title: 'Free Wi-Fi', desc: 'Stay connected with high-speed internet.' },
            { icon: '🚗', title: 'Free Parking', desc: 'Ample parking space for all guests.' },
            { icon: '🔥', title: 'Bonfire Setup', desc: 'Evening bonfires available on request.' },
            { icon: '🧹', title: 'Daily Housekeeping', desc: 'Clean and tidy rooms maintained daily.' },
            { icon: '🍽️', title: 'BBQ Facilities', desc: 'Grill your favorites with our barbecue setup.' },
            { icon: '🎲', title: 'Indoor Games', desc: 'Enjoy games like carrom, cards, and more.' },
            { icon: '🌄', title: 'Valley Views', desc: 'Scenic views right from your balcony.' },
            { icon: '🐾', title: 'Pet Friendly', desc: 'Bring your furry friends along (on request).' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300 text-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services Sections */}
      <div className="px-4 py-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Optional Add-ons */}
          <div className="bg-slate-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-3">🎉 Optional Add-on Services (May cost extra)</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Event Hosting (e.g., birthdays, weddings, retreats)</li>
              <li>Barbecue Setup / Grill Services</li>
              <li>Pet Services / Pet-Friendly Amenities</li>
              <li>Grocery Delivery / Pre-stocked Fridge</li>
              <li>Babysitting or Nanny Services</li>
            </ul>
          </div>

          {/* Premium Services */}
          <div className="bg-slate-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-3">🛎️ Luxury Villas – Premium Services</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Private Chef / Cook-on-Demand</li>
              <li>Airport Transfers</li>
              <li>Spa & Wellness Services (massage, yoga sessions, etc.)</li>
              <li>Concierge Services – Assistance with bookings, tours, etc.</li>
              <li>Personal Butler / Staff</li>
              <li>Private Garden / Outdoor Seating Area</li>
              <li>Home Theatre or Game Room</li>
              <li>Gym or Fitness Center</li>
              <li>Jacuzzi / Hot Tub</li>
            </ul>
          </div>

          {/* Basic Extra Services */}
          <div className="bg-slate-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-3">🧺 Additional Common Services</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Laundry Service or Washing Machine</li>
              <li>Security Services / CCTV Surveillance</li>
              <li>Caretaker / On-call Manager</li>
              <li>Air Conditioning / Heating</li>
              <li>Television / Entertainment Systems</li>
              <li>Power Backup / Generator</li>
              <li>Housekeeping</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
