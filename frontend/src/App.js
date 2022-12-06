import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Header from "./components/Header";
import About from './pages/About';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import Resturent from './pages/Resturent';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/hotel'>Hotel</NavLink>
          <NavLink to='/resturent'>Resturent</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path='/resturent' element={<Resturent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
