import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Canvas from './Components/Canvas';
import ErrorPage from './Components/ErrorPage';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Main from './layout/Main';
import PrivateRoute from './Routes/PrivateRoute';

const routes = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/drawing',
        element:<PrivateRoute><Canvas></Canvas></PrivateRoute>
      },
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={routes}>

      </RouterProvider>
      {/* <Canvas
        width={700}
        height={500}
      /> */}
      <Toaster />
    </div>
  );
}

export default App;
