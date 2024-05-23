import React, { useState } from 'react';
import styles from './UserAccount.module.css';

const UserAccount = ({ user, orders }) => {
  const [addresses, setAddresses] = useState(user.addresses);
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState('');

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

  return (
    <div className={styles.userAccountContainer}>
      <div className={styles.header}>
        <h1>Mi Cuenta</h1>
        <button onClick={() => console.log('Logout')} className={styles.logoutButton}>Log out</button>
      </div>
      <div className={styles.content}>
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
          <h2>Historial de Transacciones</h2>
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Fecha</th>
                <th>Estado de Pago</th>
                <th>Estado de Compra</th>
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
    </div>
  );
};

export default UserAccount;



