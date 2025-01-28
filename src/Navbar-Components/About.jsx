 
import React from "react";
import profile from "../assets/PortFolie.jpg"; 
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal'; 

const About = () => {
  useEffect(()=>{
const sr = ScrollReveal({

  origin: "bottom",  
  distance: "50px",  
  duration: 2000, 
  delay: 200, 
  reset: true ,  
});

sr.reveal("#about-us", { interval: 200 }); 
sr.reveal("h1",{origin : 'top'}) ;
sr.reveal(".about-content",{origin : 'left'});
sr.reveal(".profile-image",{origin : 'right'});


  })
    return ( 
      <div  id="about-us" className='about-us-section'>
        <header> <h1 className="about-us-header">About me</h1></header>
        <div className="about-main-content">
            <div className="image-container">
        <img className="profile-image" src={profile} alt="Profile" />
      </div>

          <div className="about-content">
            <p>
              Joseph is a detail-oriented and driven IT professional with
              hands-on experience in software development, application support,
              and database management. Passionate about leveraging technical
              expertise to deliver innovative solutions and streamline business
              processes. Skilled in creating web and mobile applications,
              debugging, and fostering team collaboration. Committed to
              continuous learning and contributing to organizational success.
            </p>
          </div>
        </div>

      </div>
    );
}
 
export default About;