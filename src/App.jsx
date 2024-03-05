import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import {CartContext} from '../utils/CartContext.js';
import './App.css';
import Cart from './components/Cart.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import ResturantMenu from './components/resturantMenu/ResturantMenu.jsx';
import './index.css';

function App() {
  const Landing = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<Home />} />
            <Route path="/resturant/:id" element={<ResturantMenu />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
