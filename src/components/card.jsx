import React from 'react';

const Card = () => {
  return (
    <>
      <h1>Ir a la lista de tareas</h1>
      <div className="card" style={{ width: "18rem" }}>
        <img src="url_de_la_imagen.jpg" className="card-img-top" alt="Descripción de la imagen" />
        <div className="card-body">
          <h5 className="card-title">Título de la tarjeta</h5>
          <p className="card-text">Texto de ejemplo rápido para construir sobre el título de la tarjeta y formar la mayor parte del contenido de las tarjetas.</p>
          <a href="#" className="btn btn-primary">Ir a algún lugar</a>
        </div>
      </div>
    </>
  );
};

export default Card;
