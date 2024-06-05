import React, { useState, useEffect } from 'react';
import ProfileThumbnail from '../components/ProfileThumbnail';
import Navbar from '../components/navbar';

const ProfilesView = () => {
  const [photographers, setPhotographers] = useState([]);

  useEffect(() => {
    
    const simulatedPhotographers = [
      { id: 1, name: 'José Perez', profile_pic: 'https://elcomercio.pe/resizer/Du2gN7S_kMRle6X-ftTX4FXQwLs=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZAGDMPPK5ZGWPERBWVHKIXXLCI.jpg' },
      { id: 2, name: 'Juan Perez', profile_pic: 'https://www.dzoom.org.es/wp-content/uploads/2019/09/consejos-fotograficos-fotografos-tips-camara-fotografo-presupuesto-734x489.jpg' },
      { id: 3, name: 'Don Pepe', profile_pic: 'https://previews.123rf.com/images/photosvit/photosvit2112/photosvit211200108/178668115-abuelo-fot%C3%B3grafo-educaci%C3%B3n-para-personas-mayores-poder-detr%C3%A1s-de-la-imagen-c%C3%A1mara-de-%C3%A9poca.jpg' },
      { id: 4, name: 'Maria Lopez', profile_pic: 'https://www.universia.net/content/dam/universia/imagenes/2020/12/fotografa%20profesional%20MX-min.jpg' },
    ];

    
    
    setTimeout(() => {
      setPhotographers(simulatedPhotographers);
    }, 500); 
  }, []);

  if (!photographers.length) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <Navbar />
      <div className="thumbnailGrid text-light">
        {photographers.map(photographer => (
          <ProfileThumbnail 
            key={photographer.id} 
            id={photographer.id} 
            name={photographer.name} 
            profilePic={photographer.profile_pic} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilesView;
