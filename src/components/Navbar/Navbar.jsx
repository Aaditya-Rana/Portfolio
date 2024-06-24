import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-custom">
      <div className="logo-custom">
        <Link to="/"><p><span>A</span>aditya</p></Link>
      </div>
      <div className={`hamburger-icon-custom ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`menu-bar-custom ${isOpen ? "open" : ""}`}>
        <Link to="/"><li className="menu-item-custom">Home</li></Link>
        <Link to="/about"><li className="menu-item-custom">About</li></Link>
        <Link to="/projects"><li className="menu-item-custom">Projects</li></Link>
        <Link to="/resume"><li className="menu-item-custom">Resume</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
