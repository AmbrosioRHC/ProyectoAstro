const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // Ejemplo de estado inicial
      counter: 0,
      user: null
    },
    actions: {
      // Ejemplo de acción para incrementar el contador
      incrementCounter: () => {
        const store = getStore();
        setStore({ counter: store.counter + 1 });
      },

      // Ejemplo de acción para establecer el usuario
      setUser: (user) => {
        setStore({ user: user });
      }
    }
  };
};

export default getState;