import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from'./App';
import Gallery from'./gallery';
import About from'./about';
import Contact from'./contact';
import Shop from'./shop';
import Navbar from './components/navbar'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom"; 



  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
        path: "gallery",
        element: <Gallery/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "shop",
        element: <Shop/>
      },
  ]);


  const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


  

  