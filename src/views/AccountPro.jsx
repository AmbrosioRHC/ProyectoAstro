import React, { useState, useEffect } from 'react';
import UserAccountPro from '../components/UserAccountPro'; // Asegúrate de que la ruta sea correcta
import Navbar from "../components/navbar";

const AccountPro = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch user data
    fetch('api/user')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
    
    // Fetch orders data
    fetch('api/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders data:', error));
  }, []);

  const placeholderUser = {
    name: 'Nombre Apellido',
    email: 'correo@electronico.com',
    addresses: [
      'Dirección Placeholder 1',
      'Dirección Placeholder 2'
    ],
  };

  const placeholderOrders = [
    { order: '#00000', date: '01 Jan 01, 2000', paymentStatus: 'Pendiente', fulfillmentStatus: 'Pendiente', total: '$0.00' },
  ];

  return (
    <div>
      <Navbar />
      <UserAccountPro user={user || placeholderUser} orders={orders.length > 0 ? orders : placeholderOrders} />
    </div>
  );
};

export default AccountPro; // Asegúrate de exportar por defecto


