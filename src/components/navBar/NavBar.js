import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png';
import Button from 'react-bootstrap/Button';
import { styles } from '../Jss';
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
      <Navbar bg="black" variant="dark">
      <div style={styles.logoContainer} href="#home"><img src={Logo} style={styles.logo} alt="logo"></img></div>

        <Container>
          <Nav className="d-flex justify-content-between w-100 align-items-center">
            <Nav.Link href="#mujeres">Mujeres</Nav.Link>
            <Nav.Link href="#kids">Kids</Nav.Link>
            <Nav.Link href="#marcas">Marcas</Nav.Link>
            <Nav.Link href="#vestidores">Vestidores</Nav.Link>
            <Nav.Link href="#showrooms">Showrooms</Nav.Link>
            <Nav.Link href="#promos">Promos</Nav.Link>
            <Nav.Link href="#vender"> <Button variant="danger">VENDER</Button>{''}</Nav.Link>
            <Nav.Link href="#ingresa"> <Button variant="danger">INGRESÁ</Button>{''}</Nav.Link>
            <CartWidget/>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;