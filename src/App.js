import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//REACT-ROUTER-DOM
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//COMPONENTS
import NavBar from "./components/navbar/NavBar"
import Login from "./components/signup&login/Login";
import Signup from "./components/signup&login/signup";

//VIEWS
import Home from "./views/Home/Home";
import Cart from "./components/cart/Cart";
import Detail from "./views/Detail/Detail";
import Vender from './views/Vender/Vender'
import Category from "./views/Category/Category";
import User from './views/User/User'

//CONTEXT
import { CartProvider } from "./Context/cartContext/CartContext";
import { UserProvider } from "./Context/userContext/UserContext";

const App = () => {
  return (
      <CartProvider>
        <UserProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="*" element={<h1 className="text-center">No existe la pagina</h1>}/>
            <Route path='/name/:nameSearched' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/vender' element={<Vender/>}/>
            <Route path='/category/:categoryId' element={<Category/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/user' element={<User/>}/>
          </Routes>
        </Router>
        </UserProvider>
      </CartProvider>
  )
}

export default App; 

