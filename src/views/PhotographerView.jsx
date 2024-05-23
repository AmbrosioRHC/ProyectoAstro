import React, { useState, useEffect } from 'react';
import PhotographerProfile from '../components/PhotographerProfile';
import Navbar from "../components/navbar"

const PhotographerView = ({ photographerId }) => {
  const [photographer, setPhotographer] = useState({});

  useEffect(() => {
    fetch(`api/photographers/${photographerId}`)
      .then(response => response.json())
      .then(data => setPhotographer(data))
      .catch(error => console.error('Error fetching photographer data:', error));
  }, [photographerId]);

  return (
  <div>
    <Navbar />
    <PhotographerProfile name={photographer.name} photo={photographer.photo} aboutMe={photographer.aboutMe} />;
  </div>
  )
};

export default PhotographerView;
