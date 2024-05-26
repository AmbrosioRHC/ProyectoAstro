import React, { useState, useEffect } from "react";
import getState from "./flux.jsx";

// No cambiar, aquí es donde inicializamos nuestro contexto, por defecto solo será null.
export const Context = React.createContext(null);

// Esta función inyecta el almacenamiento global a cualquier vista/componente donde desee usarlo.
const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    // Esto se pasará como el valor de contexto.
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions }
          })
      })
    );

    useEffect(() => {
      // Lógica de inicialización, si es necesaria.
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
