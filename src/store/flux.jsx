const getState = ({ getStore, setStore }) => {
//   return {
//     store: {
//       counter: 0,
//       user: null,
//       products: [],
//       cart: [],
//       contactForm:{
//         email: "",
//         message: ""
//       },
//       contactMail: [],
//       notifications:""
//     },
//     actions: {

//       handleChangeMail: (e)=>{
//         console.log(e.target.value)
//         setStore({contactForm:{email: e.target.value}})
//       },
      
//       handleChangeMessage: (e)=>{
//         console.log(e.target.value)
//         setStore({contactForm:{message: e.target.value}})
//       },

//       handleOnClick: (e, contactForm)=>{
//         console.log(contactForm)
//         const {contactMail} = getStore()
//         setStore({contactMail:[...contactMail, contactForm]})
//       },

//       contactFetch: ()=>{
//         fetch()
//           .then((resp) => {
//             return resp.json();
//           })
//           .then((data)=>{
//             setStore({contactMail: data});
//           })
//           .catch((error)=>{console.log(error)})
//       },
//       postContactFetch: (contact)=>{
//         fetch("",{
//           method:"POST",
//           headers: {"Content-Type": "application/json"},
//           body: JSON.stringify(contact)
//         })
//           .then((resp)=>resp.json())
//           .then((data)=>
//             {setStore({notifications:data});
//               console.log(data)})
//           .fetch((error)=>{console.log(error)})

//       },


//       incrementCounter: () => {
//         const store = getStore();
//         setStore({ counter: store.counter + 1 });
//       },

      // Establecer un user_id estático por ahora
      const staticUserId = 123;

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
            addToCart: async (product) => { // Eliminar user_id como parámetro
                try {
                    const response = await fetch(`http://127.0.0.1:5000/cart/${staticUserId}/add`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            user_id: staticUserId,
                            photo_id: product.id,
                            quantity: 1
                        })
                    });
                    if (!response.ok) {
                        throw new Error('Error adding product to cart');
                    }
                    await getState({ getStore, setStore }).actions.loadCart(staticUserId);
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
                    await getState({ getStore, setStore }).actions.loadCart(); // Corrected reference
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
                            quantity: 1
                        })
                    });
                    if (!response.ok) {
                        throw new Error('Error incrementing product quantity in cart');
                    }
                    await getState({ getStore, setStore }).actions.loadCart(); // Corrected reference
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
                            quantity: -1
                        })
                    });
                    if (!response.ok) {
                        throw new Error('Error decrementing product quantity in cart');
                    }
                    await getState({ getStore, setStore }).actions.loadCart(); // Corrected reference
                } catch (error) {
                    console.error('Error decrementing product quantity in cart:', error);
                }
            },
            loadCart: async (staticUserId) => { // Agregar user_id como parámetro
                try {
                    const response = await fetch(`http://127.0.0.1:5000/cart/${staticUserId}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setStore({ cart: data.cart });
                } catch (error) {
                    console.error('Error loading cart:', error);
                }
            }
            
        }
    };
};

export default getState;
