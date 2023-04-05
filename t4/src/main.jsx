import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './jauge.css'
import Root from './routes/root';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    index: true,
  }, 
  {
    path: "*",
    element: <Navigate to="/" replace={true} />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

