const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      
      product: {
        id: 1,
        name: "Fotografía Astro",
        price: 100.00,
        rating: 4.8,
        reviews: 67,
        likes: 200
      },

      
      cart: []
    },


    actions: {
      incrementCounter: () => {
        const store = getStore();
        setStore({ counter: store.counter + 1 });
      },
      setUser: (user) => {
        setStore({ user: user });
      },
      addToCart: (product) => {
        const store = getStore();
        setStore({ cart: [...store.cart, product] });
      },
      removeFromCart: (productId) => {
        const store = getStore();
        setStore({ cart: store.cart.filter(item => item.id !== productId) });
      },
      clearCart: () => {
        setStore({ cart: [] });
      }
    }
  };
};
 

export default getState;