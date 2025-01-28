import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 2000,
      delay: 200,
      reset: true,
    });

    sr.reveal(".contact-section", { interval: 200 });
    sr.reveal(".contact-title", { origin: "top" });
    sr.reveal(".contact-description", { origin: "left" });
    sr.reveal(".contact-form", { origin: "right" });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const response = await fetch("https://formsubmit.co/9974b3e3c9b94efea1a2ae817e896401", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        _replyto: formData.email, 
        _subject: "Contact Form Submission",
      }),
    });

    if (response.ok) { 
      setAlertMessage("Your message was sent successfully!");
      setFormData({ name: "", email: "", message: "" }); 
    } else { 
      setAlertMessage("There was an error sending your message. Please try again.");
    }
 
    setTimeout(() => setAlertMessage(null), 5000);
  };

  return (
    <section id="contact-us" className="contact-section">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-container">
        {alertMessage && (
          <div className={`alert ${response.ok ? "alert-success" : "alert-danger"}`} role="alert">
            {alertMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              className="form-control"
              rows="5"
              name="message"
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
