import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import SplashCursor from "../effect/SplashCursor";
import { TextRevealCard } from "../effect/Textreveal";

function Layout() {
  return (
    <div>
      <SplashCursor />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
