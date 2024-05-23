const getState = ({ getStore, setStore }) => {
  return {
    store: {
      counter: 0,
      user: null,
      products: [],
      cart: [],
      contactForm:{
        email: "",
        message: ""
      },
      contactMail: [],
      notifications:""
    },
    actions: {

      handleChangeMail: (e)=>{
        console.log(e.target.value)
        setStore({contactForm:{email: e.target.value}})
      },
      
      handleChangeMessage: (e)=>{
        console.log(e.target.value)
        setStore({contactForm:{message: e.target.value}})
      },

      handleOnClick: (e, contactForm)=>{
        console.log(contactForm)
        const {contactMail} = getStore()
        setStore({contactMail:[...contactMail, contactForm]})
      },

      contactFetch: ()=>{
        fetch()
          .then((resp) => {
            return resp.json();
          })
          .then((data)=>{
            setStore({contactMail: data});
          })
          .catch((error)=>{console.log(error)})
      },
      postContactFetch: (contact)=>{
        fetch("",{
          method:"POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(contact)
        })
          .then((resp)=>resp.json())
          .then((data)=>
            {setStore({notifications:data});
              console.log(data)})
          .fetch((error)=>{console.log(error)})

      },


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
