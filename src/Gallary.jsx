import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔑 Replace with your Pexels API Key
  const PEXELS_API_KEY = "BcopLCP8hsIgkd5q7E4BxygLPloP90ZBVA5YgcLyoMLtG5GeN9wgkjIM";


  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=swimming%20pool&per_page=15',
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }
        );
        setPhotos(response.data.photos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching photos from Pexels:', error);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading photos...</p>;

  return (
    
    <div className="p-6">
      <h1 className="text-2xl font-bold font-serif mb-6">
        Gallary
      </h1>
      <h1 className='text-3xl font-bold mb-5 text-center '>Cherished Moments from Our Villas</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="shadow-md rounded overflow-hidden">
            <img
              src={photo.src.medium}
              alt={photo.alt}
              className="w-full h-60 object-cover"
            />
      
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
