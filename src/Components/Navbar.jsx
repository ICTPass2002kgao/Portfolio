import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {  
 
  return (
    <nav>
      <h2>Portfolio</h2>
      <div className="collapsed-items">
        <ul id="nav-links">
          <li>
            <a href="#">Home |</a>
          </li>
          <li>
            <a href="#about-us">About |</a>
          </li>
          <li>
            <a href="#services">Services |</a>
          </li>
          <li>
            <a href="#contact-us">Contact us </a>
          </li>
          <div id="menu-icon" className="menu-icon">
            <i className="bi bi-list"></i>
          </div>

         
        </ul>
      </div> 
    </nav>
  );
};

export default NavBar;
