import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Estadisticas from './componentes/Estadisticas';
import Botones from './componentes/Botones';
import Footer from './componentes/Footer';

function App() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset(); // Limpia los campos al enviar
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <div className="nutrick-app">
      <Header />
      
      <main className="main-content">
        {/* Sección de navegación superior con aire */}
        <section className="top-nav">
          <Botones />
        </section>
        
        <section className="contacto-section">
          <div className="card-glass">
            <div className="contacto-header">
              <h2>Atención al Usuario</h2>
              <p>Tu opinión nos importa. Escríbenos para una queja, reclamo o sugerencia.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="pqr-form">
              <div className="input-group">
                <div className="field">
                  <label>Nombre Completo</label>
                  <input type="text" placeholder="Ej. David Santacruz" required />
                </div>
                <div className="field">
                  <label>Correo Electrónico</label>
                  <input type="email" placeholder="david@nutrick.com" required />
                </div>
              </div>

              <div className="field">
                <label>Tipo de Solicitud</label>
                <select required>
                  <option value="">Selecciona una opción...</option>
                  <option value="queja">😠 Queja o Reclamo</option>
                  <option value="sugerencia">💡 Sugerencia</option>
                  <option value="consulta">📞 Contacto General</option>
                </select>
              </div>

              <div className="field">
                <label>Mensaje Detallado</label>
                <textarea placeholder="Describe aquí tu situación..." rows="6" required></textarea>
              </div>

              <button type="submit" className="btn-glow">
                Enviar Solicitud
              </button>
            </form>

            {enviado && (
              <div className="alerta-success">
                ✅ Solicitud enviada. El equipo de Nutrick te responderá pronto.
              </div>
            )}
          </div>
        </section>

        {/* Sección de estadísticas separada */}
        <section className="stats-section">
          <Estadisticas />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;