import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout';
// import Hero from './components/Hero';
import Home from './components/Home';
import AddCraft from './components/AddCraft';
import UpdateCraft from './components/UpdateCraft';
import Craft from './components/Craft';
import AllCraft from './components/AllCraft';
import CraftDetails from './components/CraftDetails';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import MyCraft from './components/MyCraft';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/craft',
        element: <Craft />,
        // loader: () => fetch('http://localhost:5000/craft'),
      },
      {
        path: '/add',
        element: <PrivateRoute><AddCraft /></PrivateRoute>,
      },
      {
        path: '/mycraft',
        element: <PrivateRoute><MyCraft/></PrivateRoute>,
      },
      {
        path: '/update',
        element: <UpdateCraft />
      },
      {
        path: '/all',
        element: <AllCraft />
      },
      {
        path: '/craft/:id',
        element: <CraftDetails />
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
