
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

const Footer = () => {
    useEffect(()=>{
        const sr = ScrollReveal({
            origin: "bottom",  
            distance: "50px",  
            duration: 2000, 
            delay: 200, 
            reset: true ,  
          });
       
          sr.reveal(".contact-section", { interval: 200 }); 
          sr.reveal(".bottom-footer-icon",{origin : 'left'}) ; 
    }, []);
    return (
        <footer id="bottom-footer"   className="  text-white py-2">
            
            <a href="#"><div className="bottom-footer-icon" ><i className="bi bi-arrow-up"></i></div></a>
        <div className="footer-container mx-auto text-center">
          <p className="text-sm">
            &copy; 2025 Joseph Mthimkhulu. All rights reserved.
          </p>
          <p className="text-sm">
            Developed with ❤️ by Joseph Mthimkhulu.
          </p>
        </div>
      </footer>
          
    );
}

export default Footer;