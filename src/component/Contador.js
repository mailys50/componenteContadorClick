import React from 'react';
import '../estilos/ContadorEstilos.css';

function Contador ({cantidadClick}) {
  return( 
  <div className= 'contenedorContador'>
    {cantidadClick}
  </div>
  );
}

export default Contador;