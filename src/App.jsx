import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
