import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import Resturent from './pages/Resturent';
import Error from './pages/Error'
import "./index.css"

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
  }
])


const App =() => {
  return (
    <>
      <RouterProvider router={router}/>
      <h2 className='bg-blue'>This is awesome</h2>
    </>
  );
}

export default App;
