import React from 'react';
import './menu.css';

function Ubicacion() {
  return (
    <div>
      <article className='page-container'>
        <div className='menu-container'>
          <div>
            <h2>Nos encontramos en</h2>
            <h4>Cto Juan Pablo II 442, San Baltazar Campeche. Puebla, Puebla</h4>
          </div>
          {/* Contenedor con fondo de carga */}
          <div className="map-container">
            <div 
              className="map-loading"
            />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.6492525218264!2d-98.20777256763631!3d19.018333997075203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc1ac321ebd3f%3A0x4499f4c291c6a53f!2s442%20Pizza%20a%20la%20le%C3%B1a%20y%20jard%C3%ADn!5e0!3m2!1ses!2smx!4v1742579220629!5m2!1ses!2smx" 
              width="600" 
              height="450" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen=""
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Ubicacion;
