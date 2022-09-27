import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
export function FechaSelect({setHoraInicial, setHoraFinal}){
    return (
        <Container className="d-flex">
            <div className='m-2'>
                <Form.Label htmlFor="inputPassword5">Fecha inicial</Form.Label>
                <Form.Control
                    type="date"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e)=>{
                        const inicial = new Date(e.target.value+ ' 00:00')
                        setHoraInicial(inicial.getTime())
                    }}
                />
            </div>
            <div className='m-2'>
                <Form.Label htmlFor="inputPassword5">Fecha final</Form.Label>
                <Form.Control
                    type="date"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e)=>{
                        const inicial = new Date(e.target.value+ ' 00:00')
                        setHoraFinal(inicial.getTime())
                    }}
                />
            </div>
        </Container>
    )
}