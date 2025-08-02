import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-2">
          {/* Left: Logo */}
          <h1 className="text-2xl font-bold tracking-wide">PixelFusion</h1>

          {/* Center: Search (Desktop Only) */}
          <div className="hidden md:block w-1/3 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <motion.button
              className="absolute right-4 top-2.5 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa fa-search"></i>
            </motion.button>
          </div>

          {/* Right: Nav Links (Desktop Only) */}
          <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-yellow-400 cursor-pointer transition-colors duration-300 ${
                    isActive ? "text-yellow-400 font-semibold" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-yellow-400 cursor-pointer transition-colors duration-300 ${
                    isActive ? "text-yellow-400 font-semibold" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-yellow-400 cursor-pointer transition-colors duration-300 ${
                    isActive ? "text-yellow-400 font-semibold" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          {/* Hamburger (Mobile Only) */}
          <div
            className="md:hidden space-y-1 cursor-pointer z-50"
            onClick={() => setOpen(!open)}
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className="block h-0.5 w-6 bg-white origin-center"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className="block h-0.5 w-6 bg-white origin-center"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: open ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="md:hidden fixed top-0 right-0 h-screen w-[75%] bg-black text-white p-8 space-y-6 shadow-xl"
        >
          {/* Mobile Search */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Mobile Links */}
          <ul className="flex flex-col space-y-4 text-lg font-semibold">
            <li onClick={() => setOpen(false)} className="border-b pb-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-semibold ${isActive ? "text-yellow-400" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li onClick={() => setOpen(false)} className="border-b pb-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-lg font-semibold ${isActive ? "text-yellow-400" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li onClick={() => setOpen(false)} className="border-b pb-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-lg font-semibold ${isActive ? "text-yellow-400" : ""}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </motion.div>
      </nav>
    </div>
  );
}
