import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import Gallery from './pages/gallery'
import About from './pages/about'
import Contact from './pages/contact';
import {createBrowserRouter, RouterProvider, } from "react-router-dom"; 



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
      }

      
  ]);


  const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


  

  