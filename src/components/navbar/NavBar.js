import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png';
import Button from 'react-bootstrap/Button';
import { styles } from './NavBarStyles';
import CartWidget from './CartWidget';

import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Link to="/" style={styles.link}>
      <div style={styles.logoContainer} href="#home"><img src={Logo} style={styles.logo} alt="logo"></img></div>
      </Link>
        <Container>
          <Nav className="d-flex justify-content-between w-100 align-items-center">
            <Link to="/category/adulto" style={styles.link}>Adulto</Link>
            <Link to="/category/kids" style={styles.link}>Kids</Link>
            <Link to="/category/accesorios" style={styles.link}>Accesorios</Link>
            
             <Button variant="danger">VENDER</Button>{''}
             <Button variant="danger">INGRESÁ</Button>{''}
            <CartWidget/>

          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;