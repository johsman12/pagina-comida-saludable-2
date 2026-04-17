import React from 'react';

const Estadisticas = () => {
  return (
    <div className="stats-grid-pro">
      <div className="stat-card-pro">
        <div className="stat-icon">📊</div>
        <div className="stat-info">
          <span className="stat-label">Usuarios Activos</span>
          <span className="stat-value">1,240</span>
        </div>
      </div>
      <div className="stat-card-pro">
        <div className="stat-icon">📦</div>
        <div className="stat-info">
          <span className="stat-label">Inventario Total</span>
          <span className="stat-value">850</span>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;