import './App.css';
import delightLogo from './img/delight.png';
import Boton from './component/Boton';
import Contador from './component/Contador';
import{useState} from 'react';


function App() {

  const [cantidadClick, setCantidadClick] = useState(0);
  const manejarClic = ()=> {
    setCantidadClick(cantidadClick + 1);
  };
  const reiniciarContador =() =>{
    setCantidadClick(0);
  };
  return (
    <div className='App'>
      <div className='contenedor-de-logo'>
        <img 
        className='logo'
        src={delightLogo}
        alt = 'imagen-logo'
        />
      </div>
      <div className='contenedor-contador'>
        <Contador
        cantidadClick = {cantidadClick} />
        <Boton
        texto= 'Clic'
        esBotonClic= {true}
        manejarClic = {manejarClic} />
         <Boton
        texto= 'Reiniciar'
        esBotonClic= {false}
        manejarClic = {reiniciarContador} />
      </div>
   
    </div>
  );
}

export default App;
