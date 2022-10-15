import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.png';
import Button from 'react-bootstrap/Button';
import { styles } from './NavBarStyles';
import CartWidget from './CartWidget';
import Form from '../form/Form'
import {NavLink, useNavigate} from "react-router-dom";
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
        <NavLink to="/" style={styles.NavLink}>
      <div style={styles.logoContainer} href="#home"><img src={Logo} style={styles.logo} alt="logo"></img></div>
      </NavLink>
        <Container>  
          <Form 
          onChange = {onChange}
           onSubmit = {onSubmit}
           value={search}
          />
          <Nav className="d-flex justify-content-between w-100 align-items-center" >
            <NavLink to="/category/adulto" style={({isActive})=> isActive ? styles.active : styles.NavLink}>Adulto</NavLink>
            <NavLink to="/category/kids" style={({isActive})=> isActive ? styles.active : styles.NavLink}>Kids</NavLink>
            <NavLink to="/category/accesorios" style={({isActive})=> isActive ? styles.active : styles.NavLink}>Accesorios</NavLink>      
             <NavLink to='/vender' style={({isActive})=> isActive ? styles.active : styles.NavLink}><Button variant="danger">VENDER</Button></NavLink>
             <NavLink to="/login" style={({isActive})=> isActive ? styles.active : styles.NavLink}><Button variant="danger">INGRESÁ</Button></NavLink>
             <NavLink to="/cart" style={({isActive})=> isActive ? styles.active : styles.NavLink}><CartWidget/></NavLink>
            <NavLink to='/user' style={({isActive})=> isActive ? styles.active : styles.NavLink}><UserWidget/></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;