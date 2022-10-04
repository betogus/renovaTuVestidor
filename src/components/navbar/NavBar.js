import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png';
import Button from 'react-bootstrap/Button';
import { styles } from './NavBarStyles';
import CartWidget from './CartWidget';
import Form from '../form/Form'
import {Link, useNavigate} from "react-router-dom";
import UserWidget from './UserWidget';

const NavBar = () => {

  const navigate = useNavigate()
  const [search, setSearch] = useState()
    const onChange = (e) => {
      setSearch(e.target.value.toLowerCase().replace(/ /g, ''));
    }

     const onSubmit = (e) => {
      navigate(`/name/${search}`)
      setSearch('')

     }


    
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Link to="/" style={styles.link}>
      <div style={styles.logoContainer} href="#home"><img src={Logo} style={styles.logo} alt="logo"></img></div>
      </Link>
        <Container>
        
          <Form 
          onChange = {onChange}
           onSubmit = {onSubmit}
           value={search}
          />
          <Nav className="d-flex justify-content-between w-100 align-items-center">
            <Link to="/category/adulto" style={styles.link}>Adulto</Link>
            <Link to="/category/kids" style={styles.link}>Kids</Link>
            <Link to="/category/accesorios" style={styles.link}>Accesorios</Link>
            
             <Link to='/vender' style={styles.link}><Button variant="danger">VENDER</Button></Link>

             <Link to="/login" style={styles.link}><Button variant="danger">INGRESÁ</Button></Link>
             <Link to="/cart" style={styles.link}><CartWidget/></Link>
            <Link to='/user' style={styles.link}><UserWidget/></Link>

          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;