import React from 'react';
import '../estilos/BotonEstilo.css';

function Boton({ texto, esBotonClic,manejarClic }) {
    return(
        <button
        className={esBotonClic ? 'botonClic' : 'botonReset'}
        onClick={manejarClic}>
        {texto} 
        </button>
    );
}

export default Boton;

