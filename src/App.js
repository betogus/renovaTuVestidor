import React from "react";
import "./style.css";
import NavBar from "./components/navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {styles} from './components/Styles';
/* import ItemListContainer from "./components/itemListContainer/ItemListContainer";
 */import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";


const App = () => {
   
    return (
      
      <div style={styles.fondo}>
                <NavBar />
        <h1 style={styles.titulo}>Renová tu vestidor</h1>
        <ItemDetailContainer/>

      </div>

    )
  }

export default App; 

