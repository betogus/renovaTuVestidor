import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import NavBar from "./components/navbar/NavBar"

const App = () => {


    return (

              <>
                <Router>
                  <div>
                    <NavBar />
                    
                    <Routes>
                      <Route path='/' element={<ItemListContainer />}/>
                      <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
                      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                    </Routes>
                  </div>
                </Router>
                </>

    )
  }

export default App; 

