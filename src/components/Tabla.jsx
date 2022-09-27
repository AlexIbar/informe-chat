import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { CardInfo } from './Card';


export function Tabla({informacion, horaInicial, horaFinal}){
    const [canCard, setCard] = useState(false)
    const [indiceInfo, setIndiceInfo] = useState({})
    return (
        <>
        <RenderCard canCard={canCard} data={indiceInfo}  setCard={setCard} horaInicial={horaInicial} horaFinal={horaFinal}/>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nombre Usuario</th>
              <th>Correo</th>
              <th>Horas trabajadas</th>
            </tr>
          </thead>
          <tbody>
          {
                informacion.map((dat, index)=>{
                    return <tr key={index}>
                    <td className='text-center'>
                        <img className="rounded-circle" onClick={()=> {
                            setCard(true)
                            setIndiceInfo(informacion[index])
                        }} style={{width:'50px'}} src={'https://chatsw2.azurewebsites.net/'+dat.avatar}/>
                    </td>
                    <td>{dat.nombre}</td>
                    <td>{dat.correo}</td>
                    <td>{secondsToString(sumHorario(dat.horario, horaInicial, horaFinal))}</td>
                  </tr>
                })
            }
            
          </tbody>
        </Table>
        </>
      );
}
function RenderCard({canCard, data, setCard, horaInicial, horaFinal}){
    if(canCard){
        return <div className="position-fixed top-0 start-0 d-flex justify-content-center align-items-center align-content-center" style={{width:'100%', height:'100vh'}}>
            <CardInfo data={data} setCard={setCard} horaInicial={horaInicial} horaFinal={horaFinal}/>
        </div>
    }
    return <div></div>
}
function sumHorario(horas, horaInicial, horaFinal){
    var datSuma=0
    let newHoras = horas.filter((hora)=>{
        if(hora.fecha > horaInicial && hora.fecha < horaFinal){
            return hora
        }
    })
    newHoras.map((respuesta, index)=>{

        if((index+1)%2 > 0){
            let x = horas[index+1].fecha-respuesta.fecha
            datSuma = x
        }
    })
    return datSuma
}
export function secondsToString(seconds) {
    seconds = seconds/1000
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10)? '0' + second : second+'';
    return hour + ':' + minute;
  }