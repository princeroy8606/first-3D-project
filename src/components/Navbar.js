import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-fit h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text h-5 w-fit pl-2 pr-2">HomeNav</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium h-10 w-56  justify-around">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500 w-15 h-8" : "text-black w-15 h-8"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? "text-blue-500 w-15 h-8" : "text-black w-15 h-8"
          }
        >
          Project
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
