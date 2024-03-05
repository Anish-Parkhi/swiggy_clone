import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import ResturantMenu from './components/resturantMenu/ResturantMenu.jsx';
import './index.css';
import MenuProvider from './Context.jsx';

function App() {
  const Landing = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  return (
    <MenuProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<Home />} />
            <Route path="/resturant/:id" element={<ResturantMenu />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}

export default App;
