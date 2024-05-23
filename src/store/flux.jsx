const getState = ({ getStore, setStore }) => {
  return {
    store: {
      // Otros estados existentes...
      user: null,
      // Otros estados existentes...
    },
    actions: {
      // Otras acciones existentes...

      // login
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
            setStore({ user: data.user, loginError: null }); // Limpiamos cualquier error previo en el login y almacenamos el usuario
            // Aquí puedes guardar el token de acceso en el almacenamiento local del navegador o en el estado global
            // setStore({ token: data.token });
            return data;
          } else {
            const errorData = await response.json();
            setStore({ loginError: errorData.message }); // Almacenamos el mensaje de error en el estado
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
            // Aquí puede realizar acciones adicionales después del registro
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
          const response = await fetch("URL_DE_TU_API/recover_password", {
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
      }
    }
  };
};

export default getState;
