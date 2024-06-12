import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserAccountPro.module.css';

const UserAccountPro = ({ user, orders, setIsLoggedIn }) => {
  const [addresses, setAddresses] = useState(user.addresses);
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const navigate = useNavigate();

  const handleViewAddresses = () => {
    setShowForm(!showForm);
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (newAddress) {
      setAddresses([...addresses, newAddress]);
      setNewAddress('');
      setShowForm(false);
    }
  };

  const handleLogout = () => {
    navigate('/');
    setIsLoggedIn(false)
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      setThumbnails([...thumbnails, { url: data.secure_url, public_id: data.public_id }]);
    })
    .catch(error => console.error('Error uploading image:', error));
  };

  const handleThumbnailClick = (url) => {
    setFullscreenImage(url);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const handleDelete = (publicId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta imagen?')) {
      fetch('http://localhost:5000/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ public_id: publicId })
      })
      .then(response => response.json())
      .then(data => {
        if (data.result === 'ok') {
          setThumbnails(thumbnails.filter(thumbnail => thumbnail.public_id !== publicId));
        } else {
          console.error('Error deleting image:', data);
        }
      })
      .catch(error => console.error('Error deleting image:', error));
    }
  };

  return (
    <div className={styles.userAccountContainer}>
      <div className={styles.header}>
        <h1>Mi Cuenta Pro</h1>
        <button onClick={handleLogout} className={styles.logoutButton}>Log out</button>
      </div>
      <div className={styles.content}>
        <div className={styles.topSection}>
          <div className={styles.accountDetails}>
            <img src="/src/assets/img-logo/logo-m.png" alt="Logo" className={styles.logo} />
            <h2>Mi información</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button onClick={handleViewAddresses} className={styles.viewAddressesButton}>
              {showForm ? 'Ocultar' : `Mis direcciones (${addresses.length})`}
            </button>
            {showForm && (
              <div className={styles.addressesSection}>
                <ul>
                  {addresses.map((address, index) => (
                    <li key={index}>{address}</li>
                  ))}
                </ul>
                <form onSubmit={handleAddAddress}>
                  <input
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    placeholder="Agrega una nueva dirección"
                    className={styles.newAddressInput}
                  />
                  <button type="submit" className={styles.addAddressButton}>Agregar dirección</button>
                </form>
              </div>
            )}
          </div>
          <div className={styles.orderHistory}>
            <h2>Historial de Ventas</h2>
            <table>
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Fecha</th>
                  <th>Estado de Pago</th>
                  <th>Estado de Venta</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.order}</td>
                    <td>{order.date}</td>
                    <td>{order.paymentStatus}</td>
                    <td>{order.fulfillmentStatus}</td>
                    <td>{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.uploadedImagesSection}>
          <h2>Imágenes Publicadas</h2>
          <div className={styles.uploadSection}>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} className={styles.uploadButton}>Subir Imagen</button>
          </div>
          <div className={styles.thumbnailContainer}>
            {thumbnails.slice(0, 24).map((thumbnail, index) => (
              <div key={index} className={styles.thumbnail}>
                <img
                  src={thumbnail.url}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(thumbnail.url)}
                />
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(thumbnail.public_id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {fullscreenImage && (
        <div className={styles.fullscreen} onClick={closeFullscreen}>
          <button className={styles.fullscreenClose} onClick={closeFullscreen}>✕</button>
          <img src={fullscreenImage} alt="Fullscreen" />
        </div>
      )}
    </div>
  );
};

export default UserAccountPro;

