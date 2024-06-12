const getState = ({ getStore, setStore }) => {
  return {
    store: {
      counter: 0,
      user: null,
      products: [],
      cart: [],
    },
    actions: {

      login: async (email, password) => {
        try {
          const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
          });
          if (response.ok) {
            const data = await response.json();
            setStore({ user: data.user, loginError: null });
            localStorage.setItem('token', data.token); // Almacena el token JWT en el almacenamiento local
            return true;
          } else {
            const errorData = await response.json();
            setStore({ loginError: errorData.message });
            return false
            //throw new Error("Failed to login");
          }
        } catch (error) {
          console.error("Error logging in:", error);
        }
      },

      // Register
      register: async (name, email, password) => {
        try {
          const response = await fetch("http://127.0.0.1:5000/create_user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
          });
          if (response.ok) {
            const data = await response.json();
            return data;
          } else {
            throw new Error("Failed to register");
          }
        } catch (error) {
          console.error("Error registering:", error);
        }
      },

      // Recuperar contraseña
      recoverPassword: async (email) => {
        try {
          const response = await fetch("http://127.0.0.1:5000/recover_password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
          });
          if (response.ok) {
            return await response.json();
          } else {
            throw new Error("Failed to recover password");
          }
        } catch (error) {
          console.error("Error recovering password:", error);
        }
      },

      // Contact form actions
      handleChangeMail: (e) => {
        setStore({ contactForm: { ...getStore().contactForm, email: e.target.value } });
      },

      handleChangeMessage: (e) => {
        setStore({ contactForm: { ...getStore().contactForm, message: e.target.value } });
      },

      handleOnClick: (e, contactForm) => {
        const { contactMail } = getStore();
        setStore({ contactMail: [...contactMail, contactForm] });
      },

      contactFetch: () => {
        fetch("http://127.0.0.1:5000/contact")
          .then((resp) => resp.json())
          .then((data) => setStore({ contactMail: data }))
          .catch((error) => console.log(error));
      },

      postContactFetch: (contact) => {
        fetch("http://127.0.0.1:5000/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contact)
        })
          .then((resp) => resp.json())
          .then((data) => setStore({ notifications: data }))
          .catch((error) => console.log(error));
      },

      // Counter action
      incrementCounter: () => {
        const store = getStore();
        setStore({ counter: store.counter + 1 });
      },

      // User action
      setUser: (user) => {
        setStore({ user: user});
      },

      // Load products
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

      // Cart actions
      addToCart: async (product) => {
        try {
          const token = localStorage.getItem('token');
          const requestBody = {
            photo_id: product.id,
            quantity: 1,
            photo_name: product.name, 
            photo_price: product.price 
          };
          console.log('Request Body:', requestBody);
          const response = await fetch('http://127.0.0.1:5000/cart/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(requestBody)
          });
          
          if (!response.ok) {
            throw new Error('Error adding product to cart');
          }
          await getState({ getStore, setStore }).actions.loadCart();
        } catch (error) {
          console.error('Error adding product to cart:', error);
        }
      }
      ,

      

      removeFromCart: async (photo_id) => {
        try {
          const token = localStorage.getItem('token'); // Obtener el token JWT almacenado
          const response = await fetch('http://127.0.0.1:5000/cart/remove', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ photo_id })
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('Datos del carrito después de REMOVE:', data);

          setStore({ cart_items: data.cart_items }); // Almacenar cart_items actualizados en el estado
        } catch (error) {
          console.error('Error removing item from cart:', error);
        }},

      clearCart: () => {
        setStore({ cart: [] });
      },

      incrementQuantity: async (productId) => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/cart/${staticUserId}/${productId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              quantity: 1
            })
          });
          if (!response.ok) {
            throw new Error('Error incrementing product quantity in cart');
          }
          await getState({ getStore, setStore }).actions.loadCart();
        } catch (error) {
          console.error('Error incrementing product quantity in cart:', error);
        }
      },

      decrementQuantity: async (productId) => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/cart/${staticUserId}/${productId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              quantity: -1
            })
          });
          if (!response.ok) {
            throw new Error('Error decrementing product quantity in cart');
          }
          await getState({ getStore, setStore }).actions.loadCart();
        } catch (error) {
          console.error('Error decrementing product quantity in cart:', error);
        }
      },

      loadCart: async () => {
        try {
          const token = localStorage.getItem('token'); // Obtener el token JWT almacenado
          const response = await fetch('http://127.0.0.1:5000/cartuser', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('Datos del carrito recibidos de LOAD:', data);

          setStore({ cart_items: data.cart_items }); // Almacenar cart_items en el estado
        } catch (error) {
          console.error('Error loading cart:', error);
        }
      },
      
    }
  };
};
export default getState;

<<<<<<< HEAD
/*npm install react-select
npm install country-list
npm install react-hook-form*/
=======

/*{isLoggedIn && (<div className='userWelcome text-light ms-4 me-2 mt-3'>
                  {email !== null && <p>Hola {email} <Link to="/account-pro"><button type="button" class="btn btn-primary ms-3">Tu cuenta</button></Link></p>}
                </div>)}*/
>>>>>>> e2e10175e36cc3696c3ad72fc4a9c928d6e1056c
