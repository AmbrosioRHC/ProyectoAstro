import React, { useState, useEffect } from 'react';
import PhotographerProfile from '../components/PhotographerProfile';

const PhotographerView = ({ photographerId }) => {
  const [photographer, setPhotographer] = useState({});

  useEffect(() => {
    fetch(`api/photographers/${photographerId}`)
      .then(response => response.json())
      .then(data => setPhotographer(data))
      .catch(error => console.error('Error fetching photographer data:', error));
  }, [photographerId]);

  return <PhotographerProfile name={photographer.name} photo={photographer.photo} aboutMe={photographer.aboutMe} />;
};

export default PhotographerView;
