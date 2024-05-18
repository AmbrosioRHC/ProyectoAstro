import React from 'react';
import UserAccount from '../components/UserAccount';

const Account = () => {
  const user = {
    name: 'Pepito Pepero',
    email: 'elpepe@example.com',
    addresses: [
      'Avenida Pepito 46, Santiago, Chile',
      'Otra dirección 123, Ciudad, País'
    ],
  };

  const orders = [
    { order: '#61580', date: '24 May 03, 2024', paymentStatus: 'Pagado', fulfillmentStatus: 'Completada', total: '$1.450' },
    { order: '#61419', date: '24 May 01, 2024', paymentStatus: 'Pagado', fulfillmentStatus: 'Completada', total: '$11.200' },
  ];

  return <UserAccount user={user} orders={orders} />;
};

export default Account;