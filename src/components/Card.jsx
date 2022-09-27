import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

export function CardInfo({data, setCard, horaInicial, horaFinal}) {
  return (
    <Card style={{ width: '360px'}} className="d-flex align-items-center">
      <Card.Img variant="top" className="text-center rounded-circle m-2" style={{width:'100px'}} src={'http://localhost:3000'+data.avatar} />
      <Card.Body>
        <Card.Title>{data.nombre}</Card.Title>
        <div>
            {data.correo}
        </div>
        <div className='mt-2'>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.horario.map((d, index)=>{
                            if(horaInicial <= d.fecha && horaFinal >= d.fecha){
                                return <RowTable index={index} d={d}/>
                            }
                        })
                    }
                </tbody>
            </Table>
        </div>
        <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={()=> setCard(false)}>Aceptar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
function RowTable({index, d}){
    console.log(index)
    return <tr key={index}><td>{ index+1 }</td><td>{  new Date(d.fecha).toLocaleDateString() }</td><td>{ d.isEntrada ? 'Activo' : 'Desconectado'}</td>
    </tr>
}