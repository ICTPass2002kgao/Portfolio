import webAppIcon from '../assets/web-app.png';
import mobileAppIcon from '../assets/smartphone.png';
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

const Card = (props) => {
  const projectIcon =
    props.projectType.toLowerCase().includes("mobile")
      ? mobileAppIcon
      : webAppIcon;
      
   useEffect(() => { 
    const sr = ScrollReveal({
      origin: "bottom",  
      distance: "50px",  
      duration: 2000, 
      delay: 200, 
      reset: false,  
      
    });
 
    sr.reveal(".card", { interval: 200 }); 
    sr.reveal(".card",{origin : 'right'})
  }, []);
    return (
      <div className="card"> 
        <img src={projectIcon} alt="Project Thumbnail" /> 
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-description">{props.description}</p>
          <p className="card-techStack">
            <strong>Tech Stack:</strong> {props.techStack}
          </p>
          <p className="card-projectType">
            <strong>Project Type:</strong> {props.projectType}
          </p>
          <div className="link_buttons">
          
          {props.Url && (<a
            href={props.Url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          > 
           <i className="bi bi-box-arrow-in-up-right"> Visit site</i>
          </a>
)}
        {props.Url === "" ?  <a
            href={props.sourceCodes}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary btn-sm card-url-icon "
          >
            <i className="bi bi-github"> Visit Source codes</i>
          </a>:  <a
            href={props.sourceCodes}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary btn-sm card-url-icon position-absolute"
          >
            <i className="bi bi-github"> Visit Source codes</i>
          </a>}
        
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  