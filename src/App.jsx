import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import {NavBar} from './components/NavBar'
import { FechaSelect } from './components/FechaSelect'
import { buscar } from './service'
import './App.css'
import { Tabla } from './components/Tabla'

function App() {
  const [data, setData] = useState([])
  const [dataCopia, setDataCopia] = useState([])
  const [horaInicial, setHoraInicial] = useState(0)
  const [horaFinal, setHoraFinal] = useState(0)
  useEffect(()=>{
    buscar()
    .then(resp=> {
      setData(resp)
      setDataCopia(resp)
      setHoraInicial(fechaInicial())
      setHoraFinal((fechaInicial()+ (3600000*24-1000)))
    })
  },[])
  return (
    <>
      <NavBar/>
      <h2 className='title'>Informe usuarios</h2>
      <FechaSelect setHoraInicial={setHoraInicial} setHoraFinal={setHoraFinal}/>
      <h3 className='text-center mt-3'>Desde {new Date(horaInicial).toLocaleString()} - Hasta {new Date(horaFinal).toLocaleString()}</h3>
      <div className='container mt-5'>
        <Tabla informacion={data} horaInicial={horaInicial} horaFinal={horaFinal}/>
      </div>
    </>
  )
}
function fechaInicial(){
  const fecha = new Date()
  const dia = fecha.getDate()
  const mes = fecha.getMonth()+1;
  const anio = fecha.getFullYear()
  const hora = new Date().getHours()
  const minutos = new Date().getMinutes()
  const segundos = new Date().getSeconds()
  const recorridoHoy = (hora*3600000)+(minutos*60000)+(segundos*1000)
  const inicial = Date.now(anio+'-'+mes+'-'+dia+ ' 00:00:00')-recorridoHoy
  return inicial
}

export default App
