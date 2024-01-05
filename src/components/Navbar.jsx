import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-white" : "text-black")}
      >
        <p className="text-lg font-semibold">Home</p>
      </NavLink>
      <nav className="flex text-lg gap-6 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "orange-gradient_text" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "orange-gradient_text" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
