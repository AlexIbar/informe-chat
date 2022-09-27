import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar() {
  return (
      <Navbar expand="lg"  className='largo_nav' variant="light" bg="black">
        <Container>
          <Navbar.Brand href="#">
            <img style={{width:'150px', height:'70px'}} src="https://www.libertyseguros.es/opencms/export/pics/liberty-imagenes/frontcontent/bancoimagenes/miniatura/LibertySegurosx_WHITE_RGB.png" alt="" />
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}