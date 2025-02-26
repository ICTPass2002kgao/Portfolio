import React from "react";
import Typed from "typed.js";
import Navbar from "../Components/Navbar";
import profile from "../assets/PortFolie.jpg"; 
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal'; 
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import resume from "../assets/Mthimkhulu Kgaogelo resume.pdf"

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Mobile Developer','Django Developer'],
      typeSpeed: 100,
      loop:true,
      backSpeed:200,
      backDelay:1000,
    });
const sr = ScrollReveal({
      origin: "bottom",  
      distance: "50px",  
      duration: 2000, 
      delay: 200, 
      reset: true ,  
    });
 
    sr.reveal(".content h1", { interval: 200 }); 
    sr.reveal(".content h5",{origin : 'left'}) ;
    sr.reveal(".main-content",{origin : 'bottom'});
    sr.reveal(".profile-image",{origin : 'right'});
    return () => { 
      typed.destroy();
    };
  }, []); 
  return (
    <>
    <div className="main-content"> 
      <div className="content">
        <h1>Hello There!</h1>
        <h5>I'm Joseph</h5>
        <h4>
          I am a{" "}
          <strong>
            <span ref={el}></span>
          </strong>
        </h4>
        <p className="mini-intro">
          I'm a passionate developer skilled in building modern web and mobile applications. 
          With a knack for problem-solving and a love for clean code, I create 
          software solutions that make an impact.
        </p>
       
   
        <div className="social-icons">
          <a
            href="https://github.com/ICTPass2002kgao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://za.linkedin.com/in/kgaogelo-joseph-mthimkhulu-146a6a280"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100073118885417"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://wa.me/27695639464"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            href="tel:+27695639464"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-telephone"></i>
          </a>
        </div>
        <br />
        <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-sm card-url-icon"
          >
            <i className="bi bi-download"> Download CV</i>
          </a>
      </div>
   
      <div className="image-container">
        <img className="profile-image" src={profile} alt="Profile" />
      </div>
    </div>
      <hr />
      <About/>
      <hr /> 
      <Services/>
      <hr />
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
 