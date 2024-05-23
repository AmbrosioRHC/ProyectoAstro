import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhotographerProfile from '../components/PhotographerProfile';
import Navbar from '../components/navbar';

const PhotographerView = () => {
  const { id } = useParams();
  const [photographer, setPhotographer] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPhotographer = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/profile/${id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setPhotographer(data);
        } catch (error) {
          console.error('Error fetching photographer data:', error);
        }
      };

      fetchPhotographer();
    }
  }, [id]);

  if (id && !photographer) {
    return <div>Loading...</div>;
  }

  if (id) {
    return (
      <div>
        <Navbar />
        <PhotographerProfile 
          name={photographer.name} 
          profile_pic={photographer.profile_pic} 
          about_me={photographer.about_me} 
        />
      </div>
    );
  }

  return null;
};

export default PhotographerView;
