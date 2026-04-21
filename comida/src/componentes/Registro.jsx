import './Registro.css';
import logo from '../assets/Nutrik.jpg'; 

const Registro = () => {
  return (
    <div className="registro-page">
      <div className="info-content">
        <img src={logo} alt="Logo Nutrik" className="login-logo" />
        <h1 className="welcome-text">Únete a Nutrik</h1>
        <p>Tu plan de alimentación personalizado comienza aquí🌱</p>
      </div>

      <div className="registro-form-side">
        <div className="form-content">
          <h2>Crea tu Perfil Saludable</h2>
          
          <form className="registro-grid">
            {/* --- SECCIÓN 1: DATOS DE CUENTA --- */}
            <div className="input-field">
              <input type="text" placeholder="Nombre Completo" required />
            </div>
            
            <div className="input-field">
              <input type="email" placeholder="Correo Electrónico" required />
            </div>

            {/* --- SECCIÓN 2: DATOS FÍSICOS (En una sola línea si usas Flex) --- */}
            <div className="input-group-row">
              <div className="input-field small">
                <input type="number" placeholder="Edad" min="1" />
              </div>
              <div className="input-field small">
                <input type="number" placeholder="Peso (kg)" step="0.1" />
              </div>
              <div className="input-field small">
                <input type="number" placeholder="Estatura (cm)" />
              </div>
            </div>

            {/* --- SECCIÓN 3: PREFERENCIAS --- */}
            <div className="input-field">
              <select className="select-field">
                <option value="" disabled selected>¿Cuál es tu objetivo?</option>
                <option value="perder">Perder Peso</option>
                <option value="mantener">Mantener Salud</option>
                <option value="musculo">Ganar Masa Muscular</option>
              </select>
            </div>

            <div className="input-field">
              <select className="select-field">
                <option value="" disabled selected>Nivel de Actividad</option>
                <option value="sedentario">Sedentario (Poco ejercicio)</option>
                <option value="moderado">Moderado (3-4 días/semana)</option>
                <option value="atleta">Atleta (6-7 días/semana)</option>
              </select>
            </div>

            {/* --- SECCIÓN 4: SEGURIDAD --- */}
            <div className="input-field">
              <input type="password" placeholder="Contraseña" required />
            </div>
            
            <div className="input-field">
              <input type="password" placeholder="Confirmar Contraseña" required />
            </div>
            
            <button className="btn-registro" type="submit">Empezar mi Plan</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;