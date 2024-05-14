const SignUp = () => {
    // Definir estados para los campos del formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // Manejar cambios en los campos de entrada
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    // Manejar el envío del formulario de registro
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes implementar la lógica para enviar los datos de registro al backend
      const userData = {
        name: name,
        email: email,
        password: password
      };
      console.log('Datos de registro:', userData);
      // También puedes redirigir al usuario a otra página después del registro
    };
  
    return (
      <div>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  };
  
  export default SignUp;