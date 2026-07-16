import webAppIcon from '../assets/web-app.png';
import mobileAppIcon from '../assets/smartphone.png';
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

const Card = (props) => {
  const projectIcon =
    props.projectType.toLowerCase().includes("mobile")
      ? mobileAppIcon
      : webAppIcon;

  const storeLinks = props.storeLinks || {}; // default to empty object
  const demoCredentials = props.demoCredentials || {}; // default to empty object

  useEffect(() => { 
    const sr = ScrollReveal({
      origin: "bottom",  
      distance: "50px",  
      duration: 2000, 
      delay: 200, 
      reset: false,  
    });
 
    sr.reveal(".card", { interval: 200 }); 
    sr.reveal(".card", { origin: 'right' });
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

        {/* ---- Demo Credentials section (NEW) ---- */}
        {Object.keys(demoCredentials).length > 0 && (
          <div className="demo-credentials">
            <strong>Demo Login:</strong>
            <span className="credential">User: {demoCredentials.username}</span>
            <span className="credential">Pass: {demoCredentials.password}</span>
          </div>
        )}
        {/* ----------------------------------------- */}

        {/* ---- Store badges ---- */}
        {Object.keys(storeLinks).length > 0 && (
          <div className="store-badges">
            {storeLinks.apple && storeLinks.apple !== "" && (
              <a
                href={storeLinks.apple}
                target="_blank"
                rel="noopener noreferrer"
                className="store-icon"
                title="Available on Apple App Store"
              >
                <i className="bi bi-apple"></i>
              </a>
            )}
            {storeLinks.android && storeLinks.android !== "" && (
              <a
                href={storeLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="store-icon"
                title="Available on Google Play"
              >
                <i className="bi bi-google-play"></i>
              </a>
            )}
            {storeLinks.huawei && storeLinks.huawei !== "" && (
              <a
                href={storeLinks.huawei}
                target="_blank"
                rel="noopener noreferrer"
                className="store-icon"
                title="Available on Huawei AppGallery"
              >
                <span className="huawei-badge">Huawei</span>
              </a>
            )}
          </div>
        )}

        <div className="link_buttons">
          {props.Url && props.Url !== "" && (
            <a
              href={props.Url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            > 
              <i className="bi bi-box-arrow-in-up-right"> Visit site</i>
            </a>
          )}
          
          {props.Url === "" || !props.Url ? (
            <a
              href={props.sourceCodes}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm card-url-icon "
            >
              <i className="bi bi-github"> Visit Source codes</i>
            </a>
          ) : (
            <a
              href={props.sourceCodes}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm card-url-icon position-absolute"
            >
              <i className="bi bi-github"> Visit Source codes</i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;