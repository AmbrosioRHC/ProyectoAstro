const getState = ({ getStore, setStore }) => {
  return {
      store: {
          counter: 0,
          user: null,
          products: [],
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

          loadProducts: async () => {
              try {
                  const response = await fetch('http://127.0.0.1:5000/photos');
                  if (!response.ok) {
                      throw new Error('Network response was not ok');
                  }
                  const data = await response.json();
                  setStore({ products: data.photos });
              } catch (error) {
                  console.error('Error loading products:', error);
              }
          },

          addToCart: async (product) => {
              try {
                  const response = await fetch('http://127.0.0.1:5000/cart/1/add', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                          user_id: 1, // Aquí deberías incluir el ID del usuario actual
                          photo_id: product.id,
                          quantity: 1 // Puedes ajustar esto según la cantidad deseada por el usuario
                      })
                  });
                  if (!response.ok) {
                      throw new Error('Error adding product to cart');
                  }
                  const updatedCart = await response.json();
                  setStore({ cart: updatedCart });
              } catch (error) {
                  console.error('Error adding product to cart:', error);
              }
          },

          removeFromCart: async (productId) => {
              try {
                  const response = await fetch(`http://127.0.0.1:5000/cart/${productId}`, {
                      method: 'DELETE',
                      headers: {
                          'Content-Type': 'application/json'
                      }
                  });
                  if (!response.ok) {
                      throw new Error('Error removing product from cart');
                  }
                  const updatedCart = await response.json();
                  setStore({ cart: updatedCart });
              } catch (error) {
                  console.error('Error removing product from cart:', error);
              }
          },

          clearCart: () => {
              setStore({ cart: [] });
          },

          incrementQuantity: async (productId) => {
              try {
                  const response = await fetch(`http://127.0.0.1:5000/cart/${productId}`, {
                      method: 'PUT',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                          quantity: 1 // Cantidad por la que se incrementa
                      })
                  });
                  if (!response.ok) {
                      throw new Error('Error incrementing product quantity in cart');
                  }
                  const updatedCart = await response.json();
                  setStore({ cart: updatedCart });
              } catch (error) {
                  console.error('Error incrementing product quantity in cart:', error);
              }
          },

          decrementQuantity: async (productId) => {
              try {
                  const response = await fetch(`http://127.0.0.1:5000/cart/${productId}`, {
                      method: 'PUT',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                          quantity: -1 // Cantidad por la que se decrementa
                      })
                  });
                  if (!response.ok) {
                      throw new Error('Error decrementing product quantity in cart');
                  }
                  const updatedCart = await response.json();
                  setStore({ cart: updatedCart });
              } catch (error) {
                  console.error('Error decrementing product quantity in cart:', error);
              }
          }
      }
  };
};

export default getState;
