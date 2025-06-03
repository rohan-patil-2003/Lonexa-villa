import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Pool from './assets/1swimming.jpg';

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="px-4 sm:px-8 lg:px-20 py-10 max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-10">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold font-serif mb-4">About Lonexa</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to our beautiful villa – a perfect blend of comfort, luxury, and nature.
            Nestled in a serene location, our villa offers a peaceful retreat from the chaos of everyday life.
            Designed with elegance and equipped with modern amenities, it's ideal for family getaways, romantic escapes, or solo relaxation.
            <br /><br />
            Each room is thoughtfully furnished to provide maximum comfort, while large windows open up to breathtaking views.
            Enjoy a private pool, lush gardens, and cozy indoor spaces that make you feel right at home.
            <br /><br />
            The villa features spacious living areas, a fully-equipped modern kitchen, and outdoor seating perfect for sunset dinners or morning coffee.
            Whether you’re soaking in the sun by the pool or curled up with a book in the lounge, every corner is crafted for relaxation.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-[45%] max-w-sm md:max-w-md mx-auto"
          data-aos="slide-left"
        >
          <img
            src={Pool}
            alt="Pool"
            className="w-full h-auto rounded shadow-xl"
          />
        </div>
      </div>

      {/* Why Us Section */}
      <h2 className="text-2xl font-bold font-serif text-center mt-10 mb-6">
        Why Us?
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
      >
        {[
          {
            title: "Expertise",
            desc: "Our villa is thoughtfully designed and expertly maintained to ensure a seamless experience – from elegant architecture and luxurious interiors to top-tier upkeep and personalized comfort throughout your stay.",
          },
          {
            title: "Customized Solutions",
            desc: "Our villa experience is tailored to your unique preferences – whether you seek a peaceful retreat, a family getaway, or a romantic escape, every detail is designed to align perfectly with your vision.",
          },
          {
            title: "Timely Delivery",
            desc: "We ensure your villa stay is ready on time, with every detail perfectly arranged – offering a seamless check-in experience without compromising on comfort or quality.",
          },
          {
            title: "Affordable Prices",
            desc: "Luxury doesn’t have to come at a high price – our villa offers premium comfort and amenities at honest, transparent rates, with no hidden charges.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border-4 border-double rounded-lg p-5 text-center hover:shadow-lg hover:scale-105 hover:bg-green-50 transition-transform duration-300"
          >
            <div className="text-lg font-bold bg-green-200 w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center text-black">
              {`0${index + 1}`}
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
