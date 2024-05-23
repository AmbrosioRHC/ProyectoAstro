import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileThumbnail.module.css';

const ProfileThumbnail = ({ id, name, profilePic }) => {
  const placeholder = 'https://via.placeholder.com/150';

  return (
    <Link to={`/profile/${id}`} className={styles.thumbnailLink}>
      <div className={styles.thumbnailContainer}>
        <img src={profilePic || placeholder} alt={name} className={styles.thumbnailImage} />
        <p className={styles.thumbnailName}>{name}</p>
      </div>
    </Link>
  );
};

export default ProfileThumbnail;

