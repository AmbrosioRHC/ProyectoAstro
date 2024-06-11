import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import './styles/LoginStyle.css';
import Navbar from '../components/navbar';


function ShoppingCart() {
  const { store, actions } = useContext(Context);
  const { cart_items } = store;

  useEffect(() => {
    actions.loadCart();
  }, []);

  const removeFromCart = (photo_id) => {
    actions.removeFromCart(photo_id);
  };

  console.log('Cart Items:', cart_items);

  const total = cart_items ? cart_items.reduce((acc, item) => acc + item.photo_price * item.quantity, 0) : 0;

  // Función para formatear el precio a CLP
  const formatPriceCLP = (price) => {
    return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  };

  return (
    <>
      <div className="shopping-cart-container">
        <div className="cart-items-container">
          <h2 className="cart-heading">Carrito de Compras</h2>
          {cart_items && cart_items.length > 0 ? (
            <div className="row">
              {cart_items.map((item, index) => (
                <div className="col-md-12 mb-3" key={index}>
                  <div className="card-shopping">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          className="card-img"
                          src={item.image_url || 'https://via.placeholder.com/100'}
                          alt={item.photo_name || 'Sin imagen'}
                        />
                      </div>
                      <div className="col-md-8 d-flex">
                        <div className="card-body text-dark">
                          <h5 className="card-title">{item.photo_name}</h5>
                          <p className="card-text">Precio: {formatPriceCLP(item.photo_price)}</p>
                          <p className="card-text">Cantidad: {item.quantity}</p>
                          <button className="btn btn1 btn-danger" onClick={() => removeFromCart(item.photo_id)}>
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">No hay productos en el carrito.</p>
          )}
          <div className="cart-summary">
            <h4>Total a Pagar: {formatPriceCLP(total)}</h4>
            <Link to="/stripe" className="btn btn-primary rounded-pill btn-product-page" id="btn-product-page">
              <i className="fa-solid fa-cart-shopping"></i> Pagar Ahora
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;