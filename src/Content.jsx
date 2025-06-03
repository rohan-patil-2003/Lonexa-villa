import React, { useEffect,useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Food from './assets/food.jpg';
import Wellness from './assets/wellness-sanctuary.jpg';
import Cleaner from './assets/cleaning.jpg';
import { Link } from 'react-router-dom';

function Content() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
 const closeMobileMenu = () => setNav(false);
  return (
    <div className="md:flex flex-col items-center justify-center mt-4 px-4 sm:px-8 md:px-12 lg:px-20 py-10">
      
      <div className="text-center" data-aos="zoom-in">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Lonexa</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-black mt-2">Where Comfort Meets Beauty</h1>
        <p className="text-base sm:text-lg md:text-xl text-black mt-2 max-w-xl mx-auto">
           luxury meets nature — experience timeless beauty and unforgettable serenity at our villas.
        </p>
      </div>
      <p>Nestled in the serene hills of East Lonavala, Lonexa Villas offers the perfect fusion of comfort, elegance, and nature. Whether you're planning a family getaway, a romantic retreat, or a weekend escape with friends — our villas promise an experience beyond expectations.

Wake up to the crisp mountain breeze, sip your morning coffee beside your private pool, and watch the sun paint the valley in golden hues. From the moment you arrive, you'll feel the stress of the city melt away.Each villa is designed with love and detail — spacious interiors, warm lighting, plush furnishings, and thoughtful amenities that make you feel right at home. Outside, beautifully landscaped gardens and scenic trails invite you to reconnect with nature.

Whether you're celebrating a special occasion or simply seeking peace and privacy, Lonexa Villas is your sanctuary. Let us pamper you with personalized services, curated experiences, and the calm you've been longing for.</p>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-6xl" data-aos="slide-left">
        
        <div className="bg-violet-400 hover:bg-violet-600 transition duration-300 ease-in-out rounded-lg p-4 text-white">
          <h1 className="text-3xl text-center font-bold">3k+</h1>
          <p className="text-xl text-center font-serif">successful services</p>
        </div>

        <div className="bg-violet-400 hover:bg-violet-600 transition duration-300 ease-in-out rounded-lg p-4 text-white">
          <h1 className="text-3xl text-center font-bold">5+</h1>
          <p className="text-xl text-center font-serif">years in business</p>
        </div>

        <div className="bg-violet-400 hover:bg-violet-600 transition duration-300 ease-in-out rounded-lg p-4 text-white">
          <h1 className="text-3xl text-center font-bold">99%</h1>
          <p className="text-xl text-center font-serif">happy clients</p>
        </div>

        <div className="bg-violet-400 hover:bg-violet-600 transition duration-300 ease-in-out rounded-lg p-4 text-white">
          <h1 className="text-3xl text-center font-bold">99%</h1>
          <p className="text-xl text-center font-serif">client satisfaction</p>
        </div>

      </div>
      <h1 className="text-4xl text-center font-bold mt-5">Why choose Us..</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mt-10 px-4" data-aos="fade-up">
              <div className="p-4">
                <img className="w-full max-w-[224px] h-56 rounded-full mx-auto" src={Food} alt="Delicious Food" />
                <h1 className="font-bold text-xl text-black mt-4">Delicious Food</h1>
                <p className="mt-2 text-gray-700">
                  At our villa, we believe a perfect stay includes unforgettable flavors. Whether you crave traditional home-cooked meals, exotic delicacies, or fresh organic options, our food services are designed to delight your taste buds.
                </p>
              </div>
              <div className="p-4">
                <img className="w-full max-w-[224px] h-56 rounded-full mx-auto" src={Wellness} alt="Wellness Features" />
                <h1 className="font-bold text-xl text-black mt-4">Water & Wellness Features</h1>
                <p className="mt-2 text-gray-700">
                  Beyond a private pool, our villas can include luxurious amenities like jacuzzis, fountains, steam rooms, saunas, and recreational features – offering you the ultimate relaxation experience.
                </p>
              </div>
              <div className="p-4">
                <img className="w-full max-w-[224px] h-56 rounded-full mx-auto" src={Cleaner} alt="Maintenance" />
                <h1 className="font-bold text-xl text-black mt-4">Maintenance</h1>
                <p className="mt-2 text-gray-700">
                  Our team ensures the villa remains in pristine condition with top-notch maintenance – from pool care and garden upkeep to cleanliness and utility management.
                </p>
              </div>
            </div>
         <Link to="/Services" onClick={closeMobileMenu}>
  <button className="border-2  rounded-md border-blue-500 p-4 text-xl text-center mx-auto block mt-4 lg:hidden">
    Learn more
  </button>
</Link>

    </div>
  );
}

export default Content;
