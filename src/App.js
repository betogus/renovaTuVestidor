import React from "react";
import "./style.css";
import NavBar from "./components/navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {styles} from './components/Styles';
import Modal from './components/modal/Modal';
import CardComponent from "./components/cardComponent/CardComponent";
import {usuarios} from "./baseDeDatos/BaseDeDatos"

let i = 0;
// la forma en que se hacia antes:
class App extends React.Component {

   /* constructor () {
    super()
    this.state = {
        counter : 0
    }
  
  }
   contadorDeCards = () => {
    
          this.setState({counter: this.state.counter + 1})
        }
     

   */



  render() {
    //el render me permite devolver jsx
    return (
      <div style={styles.fondo}>
                <NavBar />
                {/* <Modal /> */}
        <h1 style={styles.titulo}>Renová tu vestidor</h1>
        <div className="d-flex">
          <CardComponent 
            user = {
              {
                logo :`${usuarios.usuario1.logo}`,
                name : `${usuarios.usuario1.name}`,
                clothes: [{
                  img : `${usuarios.usuario1.clothes[0].img}`,
                  name : `${usuarios.usuario1.clothes[0].name}`,
                  size : `${usuarios.usuario1.clothes[0].size}`,
                  price: `${usuarios.usuario1.clothes[0].price}`
                }]
              }
            }
          />
  {/*         {this.contadorDeCards}
  */}        <CardComponent 
            user = {
              {
                logo :`${usuarios.usuario1.logo}`,
                name : `${usuarios.usuario1.name}`,
                clothes: [{
                  img : `${usuarios.usuario1.clothes[1].img}`,
                  name : `${usuarios.usuario1.clothes[1].name}`,
                  size : `${usuarios.usuario1.clothes[1].size}`,
                  price: `${usuarios.usuario1.clothes[1 /* seria this.state.counter */].price}`
                }]
              }
            }
          />
  {/*         {this.contadorDeCards}
  */}        <CardComponent 
            user = {
              {
                logo :`${usuarios.usuario1.logo}`,
                name : `${usuarios.usuario1.name}`,
                clothes: [{
                  img : `${usuarios.usuario1.clothes[2].img}`,
                  name : `${usuarios.usuario1.clothes[2].name}`,
                  size : `${usuarios.usuario1.clothes[2].size}`,
                  price: `${usuarios.usuario1.clothes[2].price}`
                }]
              }
            }
          />
      </div>
      </div>
      // para evitar envolver nuestro codigo en un div, podemos usar <React.Fragment></React.Fragment> o incluso de esta manera: <> </>
    )
  }
}
export default App; // si no pongo export default abajo, otra manera es la siguiente:

// export class App extends ... etc.
// y en index.js debemos agregar unas llaves en donde dice import App:
// import { App } from './App'