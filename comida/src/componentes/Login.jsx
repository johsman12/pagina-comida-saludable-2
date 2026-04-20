// import React from 'react';
import './Login.css'; // Esto conecta los estilos

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Nutrik - Login</h2>
        
        <div className="input-group">
          <label>Usuario</label>
          <input type="text" placeholder="Ingresa tu usuario" />
        </div>

        <div className="input-group">
          <label>Contraseña</label>
          <input type="password" placeholder="********" />
        </div>

        <button type="submit" className="login-btn">Entrar</button>
      </form>
    </div>
  );
};

export default Login;