import React from "react";
import "./style.css";
import NavBar from "./components/navBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {styles} from './components/Jss'
import itemListContainer from "./components/itemListContainer/itemListContainer";

// la forma en que se hacia antes:
class App extends React.Component {
  render() {

    //el render me permite devolver jsx
    return (
      <div>
                <NavBar />
        <h1 style={styles.titulo}>Renová tu vestidor</h1>
        <itemListContainer
        greeting = "Bienvenido a nuestra tienda online" />

      </div>
      // para evitar envolver nuestro codigo en un div, podemos usar <React.Fragment></React.Fragment> o incluso de esta manera: <> </>
    )
  }

}
export default App; // si no pongo export default abajo, otra manera es la siguiente:

// export class App extends ... etc.
// y en index.js debemos agregar unas llaves en donde dice import App:
// import { App } from './App'