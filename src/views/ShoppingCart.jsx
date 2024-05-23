import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import './styles/LoginStyle.css'
import Navbar from "../components/navbar"

function ShoppingCart() {
  const { store, actions } = useContext(Context);
  const { cart } = store;

  const removeFromCart = (id) => {
      actions.removeFromCart(id);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <>
      <Navbar/>
      <div className="shopping-cart-container">
        <div className="cart-items-container">
          <h2 className="cart-heading">Carrito de Compras</h2>
          {cart.length === 0 ? (
            <p className="text-center">No hay productos en el carrito.</p>
          ) : (
            <div className="row">
              {cart.map((item, index) => (
                <div className="col-md-12 mb-3" key={index}>
                  <div className="card">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img 
                          className="card-img" 
                          src={item.img || 'https://via.placeholder.com/100'} 
                          alt={item.description || 'Sin imagen'} 
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body text-dark">
                          <h5 className="card-title">{item.description}</h5>
                          <p className="card-text">Formato: {item.format}</p>
                          <p className="card-text">Precio: ${item.price.toFixed(2)}</p>
                          <p className="card-text">Cantidad: {item.quantity}</p>
                          <button className="btn btn1 btn-danger" onClick={() => removeFromCart(item.id)}>
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="cart-summary">
            <h4>Total a Pagar: ${total.toFixed(2)}</h4>
            <Link to="/shopform" className="btn btn1 btn-primary d-block mx-auto">Ir a Pagar</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
