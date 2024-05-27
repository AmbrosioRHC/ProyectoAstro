import React, { useEffect, useContext, useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Context } from '../store/appContext';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { store, actions } = useContext(Context);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    actions.loadCart();
  }, []);

  useEffect(() => {
    setCartItems(store.cart);
  }, [store.cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log(paymentMethod);
      // Add further payment processing logic here
    } else {
      console.error(error);
    }
  };

  const calculateTotal = () => {
    // Check if cartItems is undefined or null
    if (!cartItems || !cartItems.length) {
      return 0;
    }
  
    // Use reduce to sum up the total price of all items in the cart
    return cartItems.reduce((total, item) => total + item.photo_price * item.quantity, 0);
  };
  

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group text-center mb-4">
              {cartItems && cartItems.length > 0 ? (
                // If cartItems is not undefined and has items, render them
                cartItems.map((item, index) => (
                  <div key={index}>
                    <p>Foto: {item.photo_name}</p>
                    <p>Precio: {item.photo_price}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Total: {item.photo_price * item.quantity}</p>
                    {item.photo_url && <img src={item.photo_url} alt={item.photo_name} className="img-fluid mb-3" />}
                  </div>
                ))
              ) : (
                // If cartItems is empty or undefined, display a message
                <p>No hay elementos en el carrito</p>
              )}
              <div>
                <p><strong>Total a pagar: {calculateTotal()}</strong></p>
              </div>
            </div>
            {/* Remaining code... */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
