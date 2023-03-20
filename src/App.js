import './App.css';
import Boton from './component/Boton';
import delightLogo from './img/delight.png';


function App() {
  
  const manejarClic = ()=> {
    console.log('Clic')
  }
  const reiniciarContador =() =>{
    console.log('Reiniciar');
  }
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
