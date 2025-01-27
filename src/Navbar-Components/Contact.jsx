import React from "react";
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

const Contact = () => {
    useEffect(()=>{
        const sr = ScrollReveal({
            origin: "bottom",  
            distance: "50px",  
            duration: 2000, 
            delay: 200, 
            reset: true ,  
          });
       
          sr.reveal(".contact-section", { interval: 200 }); 
          sr.reveal(".contact-title",{origin : 'top'}) ;
          sr.reveal(".contact-description",{origin : 'left'});
          sr.reveal(".contact-form",{origin : 'right'});
    }, []);
  return (
    <section id="contact-us" className="contact-section">
        <h1 className="contact-title">Contact Me</h1>
      <div className="contact-container">
         
        <form > 
             
<div class="input-group mb-3">  
  <input type="text" class="form-control" placeholder="Your name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>          
<div class="input-group mb-3">  
  <input type="email" class="form-control" placeholder="Your email" required aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Type your message here"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
