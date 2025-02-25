import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
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
        <FeatureBox imgSrc="/src/logo.png" title="Real-Time Energy Tracking" text="We are always one step ahead; we challenge convention and push the boundaries of what can be achieved" />
          <FeatureBox imgSrc="/icon2.png" title="Smart Automation" text="Optimize and control your home." />
          <FeatureBox imgSrc="/icon3.png" title="Cost Efficiency" text="Reduce energy bills with AI-powered insights." />
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="newsletter">
        <h2>Stay Updated</h2>
        <p>Join our newsletter for exclusive insights and offers.</p>
        <input type="email" placeholder="Enter your email" className="input-field" />
        <button className="subscribe-button">Subscribe</button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: support@powerhouse.com</p>
      </section>
    </div>
  );
};

interface FeatureBoxProps {
  imgSrc: string;
  title: string;
  text: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ imgSrc, title, text }) => (
  <div className="feature-box">
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default App;
