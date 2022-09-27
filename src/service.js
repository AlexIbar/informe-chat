import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses"

export const buscar = async function buscarHorario(){
    let n = await fetch('http://localhost:3000/api/horario')
    let dat = await n.json()
    let dataUsuario = dat.horario.map(rep=>{
        let indice = dat.usuarios.findIndex(usuario=> usuario._id == rep.usuario)
        if(indice != -1 ){
            return {
                ...rep,
                id_usuario: dat.usuarios[indice]._id,
                nombre: dat.usuarios[indice].nombre,
                avatar: dat.usuarios[indice].avatar,
                correo: dat.usuarios[indice].correo,
            }
        }
    })
    dataUsuario = dataUsuario.map(data=>{
        let dataSuma = 0
        data.horario.map((respuesta, index)=>{
            if((index+1)%2 > 0){
                console.log((index+1)%2)
                dataSuma = data.horario[index+1].fecha-respuesta.fecha
            }
        })
        return {
            ...data,
            horasTraba:dataSuma
        }
    })
    return dataUsuario
}