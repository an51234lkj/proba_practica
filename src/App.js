import { useEffect, useState } from "react";
import './App.css';
import Boton from './components/Boton';

function App() {

  let [valorActual, setValorActual] = useState(0)
  let [auto, setAuto] = useState(false)

  function incrementar() {
    let novoValor = valorActual + 1
    setValorActual(novoValor)
  }

  function diminuir() {
    let novoValor = valorActual - 1
    setValorActual(novoValor)
  }

  function manexadorAuto() {
    setAuto(true)
  }

  function reiniciar() {
    setAuto(false)
    setValorActual(0)
  }

  useEffect(
    ()=>{
      let codigoTemporizador
      if (auto) { codigoTemporizador = setTimeout(incrementar, 1000) }
      return ()=>{clearTimeout(codigoTemporizador)}
    },
    [auto, valorActual]
  )

  return (
    <main>
      <h1>Megacontador</h1>
      <p id="contador">{valorActual}</p>
      <div>
        <Boton texto="+" operacion={incrementar}/>
        <Boton texto="-" operacion={diminuir}/>
        <Boton texto="Reset" operacion={reiniciar}/>
        <Boton texto="Auto" operacion={manexadorAuto}/>
      </div>
    </main>
  )

}

export default App;