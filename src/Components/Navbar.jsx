import { useEffect, useState } from "react";
import ScrollReveal from 'scrollreveal';
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isOpen, useIsOpen] = useState(true); 
  const _toggle = () => {

    useIsOpen(!isOpen);

  }
  useEffect(()=>{
    
const sr = ScrollReveal({
  origin: "bottom",  
  distance: "50px",  
  duration: 2000, 
  delay: 200, 
  reset: true ,  
});

sr.reveal(".content h1", { interval: 200 }); 
sr.reveal(".nav-links",{origin : 'top'}) ;
  },[]);
  return (
    <nav>
      <h2>Portfolio</h2>
      <div className="collapsed-items">
        {isOpen?<ul className={`nav-links`}>
          <li>
            <a href="#">Home </a>
          </li>
          <li>
            <a href="#about-us">About </a>
          </li>
          <li>
            <a href="#services">Services </a>
          </li>
          <li>
            <a href="#contact-us">Contact us </a>
          </li>

        </ul>:<a></a> }
        
          <div id="menu-icon" className="menu-icon" onClick={_toggle}>
            {!isOpen ? <i className="bi bi-list"></i> : <i className="bi-x-lg"></i>}
          </div>

      </div>
    </nav>
  );
};

export default NavBar;
