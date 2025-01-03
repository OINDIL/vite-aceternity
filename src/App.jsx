import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Landing/Home";
import About from "./Main/About";
import Contact from "./Main/Contact";
import Blog from "./Main/Blog";
import { Navbar } from "./Landing/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
      errorElement: <div>404</div>,
    },
    {
      path: "/about",
      element: (
        <>
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Contact />
        </>
      ),
    },
    {
      path: "/blog",
      element: (
        <>
          <Blog />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
