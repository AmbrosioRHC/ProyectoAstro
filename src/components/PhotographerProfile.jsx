import React from 'react';
import styles from './PhotographerProfile.module.css';

const PhotographerProfile = ({ name, photo, aboutMe }) => {
  const placeholder = 'https://via.placeholder.com/1146x719';

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileTitle}>{name || 'Nombre del Fotógrafo'}</h1>
      <div className={styles.profileImageContainer}>
        <img src={photo || placeholder} alt={name || 'Placeholder Image'} className={styles.profileImage} />
      </div>
      <p className={styles.profileDescription}>{aboutMe || 'Descripción del fotógrafo'}</p>
    </div>
  );
};

export default PhotographerProfile;
