import React from "react";
import "./style.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

//REACT-ROUTER-DOM
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//COMPONENTS
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import NavBar from "./components/navbar/NavBar"

//VIEWS
import Ingresa from "./views/Ingresa/Ingresa";
import Home from "./views/Home/Home";
import Cart from "./components/cart/Cart";
import Detail from "./views/Detail/Detail";
//import { ItemsProvider } from "./Context/itemContext/ItemsContext";
import { CartProvider } from "./Context/cartContext/CartContext";
import Vender from './views/Vender/Vender'
import Category from "./views/Category/Category";


const App = () => {
  return (
    //<ItemsProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="*" element={<h1 className="text-center">No existe la pagina</h1>}/>
            <Route path='/name/:nameSearched' element={<Home/>}/>
            <Route path='/ingresa' element={<Ingresa/>}/>
            <Route path='/vender' element={<Vender/>}/>
            <Route path='/category/:categoryId' element={<Category/>}/>
          </Routes>
        </Router>
      </CartProvider>
    //</ItemsProvider>
  )
}

export default App; 

