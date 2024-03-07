import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
    <Navbar bg='danger' data-bs-theme='dark'>
        <Container>
        <Nav className="mr-auto">
            <Link to={'/'} className='text-light text-decoration-none'>🏠 Home</Link>
            <Link to={'/contact'} className='text-white text-decoration-none ms-3'>📒 Contacto</Link>
          </Nav>
        </Container>
        <Navbar.Brand className='navbar-nav ml-auto text-light'>Happy Cake 🍰</Navbar.Brand>
          
    </Navbar>
    </div>
  )
}

export default Navigation