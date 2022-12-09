import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import Resturent from './pages/Resturent';
import Error from './pages/Error'
import "./index.css"
import SignIN from './Auth/SignIN';
import SignUP from './Auth/SignUP';
import Dashboard from './Auth/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Nav />
        <Home />
      </>
    ),
    errorElement: <Error />
  },
  {
    path: '/about',
    element: (
      <>
        <Nav />
        <About />
      </>
    )
  },
  {
    path: '/hotel',
    element: (
      <>
        <Nav />
        <Hotel />
      </>
    )
  },
  {
    path: '/resturent',
    element: (
      <>
        <Nav />
        <Resturent />
      </>
    )
  },
  {
    path: '/signin',
    element: (
      <>
        <Nav />
        <SignIN />
      </>
    )
  },
  {
    path: '/signup',
    element: (
      <>
        <Nav />
        <SignUP />
      </>
    )
  },
  {
    path: '/dashboard',
    element: (
      <>
        <Nav />
        <Dashboard />
      </>
    )
  },
])


const App =() => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
