import { useState, useEffect } from 'react'
import './App.css'
import Logo from "./assets/logo.png"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CollectData from './pages/CollectData';
import Intro from './pages/Intro';
import SelectLevel from './pages/SelectLevel';
import ChatUni from './pages/ChatUni';
import ChatPost from './pages/ChatPost';
import ChatPrimary from './pages/ChatPrimary';
import ChatSecondary from './pages/ChatSecondary';

const router = createBrowserRouter([
  {
    path: "/chatprimary",
    element: <ChatPrimary/>
  },
  {
    path: "/chatsecondary",
    element: <ChatSecondary/>
  },
  {
    path: "/chatuni",
    element: <ChatUni/>
  },
  {
    path: "/chatpostgrad",
    element: <ChatPost/>
  },
  {
    path: "collect",
    element: <CollectData/>,
  },
  {
    path: "/",
    element: <Intro/>,
  },
  {
    path: "/select",
    element: <SelectLevel/>,
  },
]);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
