//import React from 'react';
import './Registro.css';
import logo from '../assets/Nutrik.jpg'; 

const Registro = () => {
  return (
    <div className="registro-page">
      {/* Panel de información (Consistente con tu Login) */}
      <div className="info-content">
        <img src={logo} alt="Logo Nutrik" className="login-logo" />
        <h1 className="welcome-text">Únete a Nutrik</h1>
        <p>Comienza tu camino hacia una vida más saludable🌱</p>
      </div>

      {/* Formulario de Registro */}
      <div className="registro-form-side">
        <div className="form-content">
          <h2>Registro</h2>
          
          <form>
            <div className="input-field">
              <input type="text" placeholder="Nombre Completo" />
            </div>
            <div className="input-field">
              <input type="email" placeholder="Correo Electrónico" />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Contraseña" />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Confirmar Contraseña" />
            </div>
            
            <button className="btn-registro" type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;