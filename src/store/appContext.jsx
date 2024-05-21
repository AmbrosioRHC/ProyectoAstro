import React, { useState, useEffect } from "react";
import getState from "./flux.jsx";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    //this will be passed as the contenxt value
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      
    }, []);

  
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;

/* codigo de shopping cart 

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      products: [],
      cart: []
    },
    actions: {
      loadProducts: () => {
        // Lógica para cargar productos
      },
      addToCart: (product) => {
        const store = getStore();
        const itemIndex = store.cart.findIndex(item => item.id === product.id);
        if (itemIndex > -1) {
          store.cart[itemIndex].quantity += 1;
        } else {
          product.quantity = 1;
          setStore({ cart: [...store.cart, product] });
        }
      },
      removeFromCart: (id) => {
        const store = getStore();
        setStore({ cart: store.cart.filter(item => item.id !== id) });
      },
      incrementQuantity: (id) => {
        const store = getStore();
        const cart = store.cart.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setStore({ cart });
      },
      decrementQuantity: (id) => {
        const store = getStore();
        const cart = store.cart.map(item => {
          if (item.id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setStore({ cart });
      }
    }
  };
};

export default getState;
*/
