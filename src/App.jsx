import { useState, useEffect } from 'react'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import CollectData from './pages/CollectData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "collect",
    element: <CollectData/>,
  },
]);

function App() {
 

  return (
<RouterProvider router={router} />
  )
}

export default App
