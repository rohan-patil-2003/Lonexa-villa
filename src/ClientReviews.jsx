import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rohit from './assets/Rohit.jpg';
import Rohan from './assets/Rohan.jpg';
import Swapnil from './assets/Swapnil.jpg';
import Omkar from './assets/Omkar.jpg';
import Hanumant from './assets/HanumantD.jpg';
import Vishwanath from './assets/vishwanath.jpg';

const reviewsData = [
  {
    name: "Rohit Lokhande",
    image: Rohit,
    text: "A truly unforgettable experience! The private pool was the perfect retreat, the food was exquisite, and the surrounding nature added a serene charm. A luxurious getaway I’ll cherish forever!",
    stars: 5
  },
  {
    name: "Swapnil Gunjal",
    image: Swapnil,
    text: "From the moment we arrived, we were treated to exceptional service. The private pool offered ultimate relaxation, and the breathtaking views combined with delicious meals made this villa stay one-of-a-kind.",
    stars: 4
  },
  {
    name: "Rohan Patil",
    image: Rohan,
    text: "This luxury villa exceeded all expectations. The pristine private pool was ideal for unwinding, and every meal was a gourmet delight. The stunning nature surrounding the villa added the perfect touch to a dream vacation.",
    stars: 5
  },
  {
    name: "Omkar Devkar",
    image: Omkar,
    text: "An amazing experience from start to finish! The private pool provided perfect privacy, the food was nothing short of amazing, and the natural beauty around the villa made this a top-tier luxury retreat.",
    stars: 4
  },
  {
    name: "Vishwanath Zore",
    image: Vishwanath,
    text: "Lonexa Villas exceeded every expectation! The interiors were tastefully done, the staff was attentive and respectful, and the peaceful surroundings made it a true escape from city life. We felt pampered the entire stay.",
    stars: 5
  },
  {
    name: "Hanumant Dombale",
    image: Hanumant,
    text: "From the moment we arrived, everything felt perfect — the clean, spacious rooms, the soothing wellness features, and the breathtaking views. It’s the kind of place you don’t want to leave. Truly a hidden gem in Lonavala!",
    stars: 4
  }
];

function Reviews() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-4 py-10 bg-slate-100">
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-black">What Our Clients Say</h2>
        <p className="text-lg text-gray-700 mt-2">Real experiences, real feedback from our valued clients</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6" data-aos="zoom-in">
        {reviewsData.map((review, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300 text-center">
            <div className="flex justify-center mb-3">
              <img className="w-24 h-24 rounded-full object-cover" src={review.image} alt={review.name} />
            </div>
            <h3 className="text-xl font-semibold mb-1">{review.name}</h3>
            <div className="text-yellow-400 mb-2">
              {'⭐'.repeat(review.stars)}
            </div>
            <p className="text-gray-600 text-sm">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
