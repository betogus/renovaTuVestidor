import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ItemsProvider } from "./itemContext/ItemsContext";

import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import NavBar from "./components/navbar/NavBar"
import Cart from "./components/cart/Cart";
import { CartProvider } from "./cartContext/CartContext";
import Signup from "./components/signup/signup";

const App = () => {
  return (
    <ItemsProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <div>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenido a Renova Tu Vestidor"/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/:nameId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="*" element={<h1>No existe la pagina</h1>}/>
            <Route path='/name/:nameSearched' element={<ItemListContainer/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
          </div>
        </Router>
      </CartProvider>
    </ItemsProvider>
  )
}

export default App; 

