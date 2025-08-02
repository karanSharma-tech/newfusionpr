import { useState } from "react";
import React from "react";
import Navbar from "./component/Navbar.jsx";
import "./App.css";
import Layout from "./component/Layout.jsx";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./component/Hero.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Hero />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
