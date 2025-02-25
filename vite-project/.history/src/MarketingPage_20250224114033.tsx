import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import FeatureBox from "../components/FeatureBox"; // Adjust the path as necessary

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">POWERHOUSE</div>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About Us</button>
          <button onClick={() => scrollToSection("features")}>Features</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </nav>
    
    {/* Hero Section */}
    <section id="home" className="hero">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1>Experience the Future of Smart Energy</h1>
          <p>Intelligent automation and energy savings at your fingertips.</p>
          <button className="cta-button">Get Started</button>
        </motion.div>
      </section>
    
    {/* Features Section */}
    <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <FeatureBox imgSrc="/icon1.png" title="Real-Time Tracking" text="Monitor your energy usage effortlessly." />
          <FeatureBox imgSrc="/icon2.png" title="Smart Automation" text="Optimize and control your home." />
          <FeatureBox imgSrc="/icon3.png" title="Cost Efficiency" text="Reduce energy bills with AI-powered insights." />
        </div>
      </section>