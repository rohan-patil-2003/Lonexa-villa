import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Swimming from './assets/1swimming.jpg'
import Bed from './assets/bedroom.jpg'
import Living from './assets/livingroom.jpg'
function Hero(){
  return(
  <>
  <div>
  <Swiper
        modules={[Autoplay]} 
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        loop={true} 
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            src={Bed}
            alt="Beautiful Villa 2"
            className="w-full h-[300px] md:h-[700px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white">
              <h1 className="text-4xl md:text-6xl font-bold">Welcome to Lonexa</h1>
              <p className="mt-4 text-lg md:text-2xl">Luxury Villas Just for You</p>
              <button className="mt-6 px-6 py-3 bg-orange-500 rounded-full hover:bg-orange-600 transition">
                View Villas
              </button>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <img
            src={Living}
            alt="Beautiful Villa 2"
            className="w-full h-[300px] md:h-[700px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white">
              <h1 className="text-4xl md:text-6xl font-bold">Experience Paradise</h1>
              <p className="mt-4 text-lg md:text-2xl">Where Comfort Meets Beauty</p>
              <button className="mt-6 px-6 py-3 bg-orange-500 rounded-full hover:bg-orange-600 transition">
                View Villas
              </button>
            </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <img
            src={Swimming}
            alt="Beautiful Villa 3"
            className="w-full h-[300px] md:h-[700px] object-cover"
          />
           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white">
              <h1 className="text-4xl md:text-6xl font-bold">Your Dream Stay</h1>
              <p className="mt-4 text-lg md:text-2xl">Book Your Getaway Now</p>
              <button className="mt-6 px-6 py-3 bg-orange-500 rounded-full hover:bg-orange-600 transition">
                View Villas
              </button>
            </div>
      
         
        </SwiperSlide>

      </Swiper>
   
  </div>
  </>
  )
}
export default Hero