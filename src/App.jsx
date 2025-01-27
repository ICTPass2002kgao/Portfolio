import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Navbar-Components/Home";
import About from "./Navbar-Components/About";
import Services from "./Navbar-Components/Services";
import Contact from "./Navbar-Components/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about-us" element={<About />} />

        <Route path="/our-services" element={<Services />} />

        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router></>
  );
}

export default App;
