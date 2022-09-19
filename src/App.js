import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ItemsProvider } from "./ItemsContext";

import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import NavBar from "./components/navbar/NavBar"
import Cart from "./components/cart/Cart";
import { CartProvider } from "./cartContext/CartContext";

const App = () => {
  return (
      <ItemsProvider>
        <CartProvider>
          <Router>
            <div>
              <NavBar />        
              <Routes>
                <Route path='/' element={<ItemListContainer greeting="Bienvenido a Renova Tu Vestidor"/>}/>
                <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/:nameId' element={<ItemListContainer/>}/>
                <Route path='/cart' element={<Cart greeting="carrito"/>}/>
                <Route path="*" element={<h1>No existe la pagina</h1>}/>
              </Routes>
            </div>
          </Router>
        </CartProvider>
      </ItemsProvider>
    )
  }

export default App; 

