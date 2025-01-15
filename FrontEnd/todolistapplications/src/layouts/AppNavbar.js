import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
//import {Nav, Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';


function AppNavbar() {


  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container className="mt-3">
        <Navbar.Brand as={Link} to="/">To-Do List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default AppNavbar;

// <Nav.Link as={Link} to="/areas-criticas/:id">Areas criticas Detalle</Nav.Link>
//<Nav.Link as={Link} to="/evaluaciones/:id">Evaluaciones Detalle</Nav.Link>
         