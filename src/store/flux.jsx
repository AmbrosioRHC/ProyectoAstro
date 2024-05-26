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
            return data;
          } else {
            const errorData = await response.json();
            setStore({ loginError: errorData.message });
            throw new Error("Failed to login");
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
        setStore({ user: user });
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
            photo_name: product.name, // Agrega el nombre de la foto al cuerpo de la solicitud
            photo_price: product.price // Agrega el precio de la foto al cuerpo de la solicitud
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

      

      removeFromCart: async (productId) => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/cart/${staticUserId}/${productId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (!response.ok) {
            throw new Error('Error removing product from cart');
          }
          await getState({ getStore, setStore }).actions.loadCart();
        } catch (error) {
          console.error('Error removing product from cart:', error);
        }
      },

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
          console.log('Datos del carrito recibidos:', data);

          setStore({ cart: data.cart }); // Actualizar el estado del carrito en el store
        } catch (error) {
          console.error('Error loading cart:', error);
        }
      }
    }
  }
;}

export default getState;


// const getState = ({ getStore, setStore }) => {
//   return {
//     store: {
//       // Otros estados existentes...
//       user: null,
//       // Otros estados existentes...
//     },
//     actions: {
//       // Otras acciones existentes...

//       // login
//       login: async (email, password) => {
//         try {
//           const response = await fetch("http://127.0.0.1:5000/login", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ email, password })
//           });
//           if (response.ok) {
//             const data = await response.json();
//             setStore({ user: data.user, loginError: null }); // Limpiamos cualquier error previo en el login y almacenamos el usuario
//             // Aquí puedes guardar el token de acceso en el almacenamiento local del navegador o en el estado global
//             // setStore({ token: data.token });
//             return data;
//           } else {
//             const errorData = await response.json();
//             setStore({ loginError: errorData.message }); // Almacenamos el mensaje de error en el estado
//             throw new Error("Failed to login");
//           }
//         } catch (error) {
//           console.error("Error logging in:", error);
//         }
//       },

//       // Register

//       register: async (name, email, password) => {
//         try {
//           const response = await fetch("http://127.0.0.1:5000/create_user", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ name, email, password })
//           });
//           if (response.ok) {
//             const data = await response.json();
//             // Aquí puede realizar acciones adicionales después del registro
//             return data;
//           } else {
//             throw new Error("Failed to register");
//           }
//         } catch (error) {
//           console.error("Error registering:", error);
//         }
//       },

//       // Recuperar contraseña
//       recoverPassword: async (email) => {
//         try {
//           const response = await fetch("URL_DE_TU_API/recover_password", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ email })
//           });
//           if (response.ok) {
//             return await response.json();
//           } else {
//             throw new Error("Failed to recover password");
//           }
//         } catch (error) {
//           console.error("Error recovering password:", error);
//         }
//       }
//     }
//   };
// //   return {
// //     store: {
// //       counter: 0,
// //       user: null,
// //       products: [],
// //       cart: [],
// //       contactForm:{
// //         email: "",
// //         message: ""
// //       },
// //       contactMail: [],
// //       notifications:""
// //     },
// //     actions: {

// //       handleChangeMail: (e)=>{
// //         console.log(e.target.value)
// //         setStore({contactForm:{email: e.target.value}})
// //       },
      
// //       handleChangeMessage: (e)=>{
// //         console.log(e.target.value)
// //         setStore({contactForm:{message: e.target.value}})
// //       },

// //       handleOnClick: (e, contactForm)=>{
// //         console.log(contactForm)
// //         const {contactMail} = getStore()
// //         setStore({contactMail:[...contactMail, contactForm]})
// //       },

// //       contactFetch: ()=>{
// //         fetch()
// //           .then((resp) => {
// //             return resp.json();
// //           })
// //           .then((data)=>{
// //             setStore({contactMail: data});
// //           })
// //           .catch((error)=>{console.log(error)})
// //       },
// //       postContactFetch: (contact)=>{
// //         fetch("",{
// //           method:"POST",
// //           headers: {"Content-Type": "application/json"},
// //           body: JSON.stringify(contact)
// //         })
// //           .then((resp)=>resp.json())
// //           .then((data)=>
// //             {setStore({notifications:data});
// //               console.log(data)})
// //           .fetch((error)=>{console.log(error)})

// //       },


// //       incrementCounter: () => {
// //         const store = getStore();
// //         setStore({ counter: store.counter + 1 });
// //       },

//       // Establecer un user_id estático por ahora
//       const staticUserId = 123;

//     return {
//         store: {
//             counter: 0,
//             user: null,
//             products: [],
//             cart: []
//         },
//         actions: {
//             incrementCounter: () => {
//                 const store = getStore();
//                 setStore({ counter: store.counter + 1 });
//             },
//             setUser: (user) => {
//                 setStore({ user: user });
//             },
//             loadProducts: async () => {
//                 try {
//                     const response = await fetch('http://127.0.0.1:5000/photos');
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     const data = await response.json();
//                     setStore({ products: data.photos });
//                 } catch (error) {
//                     console.error('Error loading products:', error);
//                 }
//             },
//             addToCart: async (product) => { // Eliminar user_id como parámetro
//                 try {
//                     const response = await fetch(`http://127.0.0.1:5000/cart/${staticUserId}/add`, {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             user_id: staticUserId,
//                             photo_id: product.id,
//                             quantity: 1
//                         })
//                     });
//                     if (!response.ok) {
//                         throw new Error('Error adding product to cart');
//                     }
//                     await getState({ getStore, setStore }).actions.loadCart(staticUserId);
//                 } catch (error) {
//                     console.error('Error adding product to cart:', error);
//                 }
//             },
            
//             removeFromCart: async (productId) => {
//                 try {
//                     const response = await fetch(`http://127.0.0.1:5000/cart/${productId}`, {
//                         method: 'DELETE',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         }
//                     });
//                     if (!response.ok) {
//                         throw new Error('Error removing product from cart');
//                     }
//                     await getState({ getStore, setStore }).actions.loadCart(); // Corrected reference
//                 } catch (error) {
//                     console.error('Error removing product from cart:', error);
//                 }
//             },
//             clearCart: () => {
//                 setStore({ cart: [] });
//             },
//             incrementQuantity: async (productId) => {
//                 try {
//                     const response = await fetch(`http://127.0.0.1:5000/cart/${productId}`, {
//                         method: 'PUT',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             quantity: 1
//                         })
//                     });
//                     if (!response.ok) {
//                         throw new Error('Error incrementing product quantity in cart');
//                     }
//                     await getState({ getStore, setStore }).actions.loadCart(); // Corrected reference
//                 } catch (error) {
//                     console.error('Error incrementing product quantity in cart:', error);
//                 }
//             },
//             decrementQuantity: async (productId) => {
//                 try {
//                     const response = await fetch(`http://127.0.0.1:5000/cart/${productId}`, {
//                         method: 'PUT',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             quantity: -1
//                         })
//                     });
//                     if (!response.ok) {
//                         throw new Error('Error decrementing product quantity in cart');
//                     }
//                     await getState({ getStore, setStore }).actions.loadCart(); // Corrected reference
//                 } catch (error) {
//                     console.error('Error decrementing product quantity in cart:', error);
//                 }
//             },
//             loadCart: async (staticUserId) => { // Agregar user_id como parámetro
//                 try {
//                     const response = await fetch(`http://127.0.0.1:5000/cart/${staticUserId}`);
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     const data = await response.json();
//                     setStore({ cart: data.cart });
//                 } catch (error) {
//                     console.error('Error loading cart:', error);
//                 }
//             }
            
//         }
//     };
// };

// export default getState;
