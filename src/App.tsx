import { useState } from 'react'
import MostrarBuses from './componentes/Buses';
import './App.css'
import MostrarUnBus from './componentes/BusEspecifico';

function App() {
  const [tipo, setTipo] = useState(1);

  const cambiarTipo = () => {
    setTipo(tipo * -1);
  }

  return (
    <>
      <button onClick={cambiarTipo}>Cambiar Modo</button>
      {tipo == -1 && (
        <MostrarBuses></MostrarBuses>
      )}
      {tipo == 1 && (
        <MostrarUnBus></MostrarUnBus>
      )}
    </>
  )
}

export default App
