import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import NavBar from "./components/navbar/NavBar"
import Cart from "./components/cart/Cart";

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
                      <Route path='/:nameId' element={<ItemListContainer/>}/>
                      <Route path='/cart/:itemId' element={<Cart/>}/>
                    </Routes>
                  </div>
                </Router>
                </>

    )
  }

export default App; 

