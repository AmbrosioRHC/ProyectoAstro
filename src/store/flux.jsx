const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
 
      products: [{
        id: 1,
        name: "Fotografía Astro",
        price: 100.00,
        rating: 4.8,
        reviews: 67,
        likes: 200,
        image: "https://picsum.photos/id/26/600/800"
        
      },

      {
        id: 2,
        name: "Producto 2",
        price: 50.00,
        rating: 2.5,
        reviews: 6,
        likes: 2,
        image: "https://picsum.photos/id/27/600/800"
      },

      {
        id: 3,
        name: "Producto 3",
        price: 60.00,
        rating: 3.5,
        reviews: 621,
        likes: 322,
        image: "https://picsum.photos/id/28/600/800"
      },

      {
        id: 4,
        name: "Producto 4",
        price: 40.00,
        rating: 4.5,
        reviews: 43,
        likes: 223,
        image: "https://picsum.photos/id/29/600/800"
      },

      {
        id: 5,
        name: "Producto 5",
        price: 255.00,
        rating: 3.5,
        reviews: 323,
        likes: 211,
        image: "https://picsum.photos/id/30/600/800"
      },

      {
        id: 6,
        name: "Producto 6",
        price: 5.530,
        rating: 4.9,
        reviews: 453,
        likes: 222,
        image: "https://picsum.photos/id/31/600/800"
      }
      ],

      


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
        const existingProductIndex = store.cart.findIndex(item => item.id === product.id);
        if (existingProductIndex >= 0) {
          const updatedCart = [...store.cart];
          updatedCart[existingProductIndex].quantity += 1;
          setStore({ cart: updatedCart });
        } else {
          setStore({ cart: [...store.cart, { ...product, quantity: 1 }] });
        }
      },

      removeFromCart: (productId) => {
        const store = getStore();
        setStore({ cart: store.cart.filter(item => item.id !== productId) });
      },
      clearCart: () => {
        setStore({ cart: [] });
      },
      incrementQuantity: (productId) => {
        const store = getStore();
        const updatedCart = store.cart.map(item => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setStore({ cart: updatedCart });
      },
      decrementQuantity: (productId) => {
        const store = getStore();
        const updatedCart = store.cart.map(item => {
          if (item.id === productId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setStore({ cart: updatedCart });
      }
    }
  };
};


export default getState;