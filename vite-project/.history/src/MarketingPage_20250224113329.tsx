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
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("features")}>Features</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div className="hero-content" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1>Experience Smart Living</h1>
          <p>Track, automate, and optimize energy use effortlessly.</p>
          <button className="cta-button">Get Started</button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section dark-section">
        <div className="content-left">
          <h2>Discover Our Story</h2>
          <p>
            POWERHOUSE is a smart home platform designed to help you track, automate, and reduce
            energy consumption effortlessly.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <h2>Features</h2>
        <div className="features-grid">
          <FeatureBox title="Real-Time Tracking" text="Stay ahead with live energy updates." />
          <FeatureBox title="User-Friendly Interface" text="Sleek design with easy navigation." />
          <FeatureBox title="Cost-Saving" text="Optimize your energy use and save money." />
          <FeatureBox title="Smart Automation" text="AI-driven insights for efficiency." />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="footer-section">
        <footer>
          <h2>Contact Us</h2>
          <p>Email: support@powerhouse.com</p>
        </footer>
      </section>
    </div>
  );
};

interface FeatureBoxProps {
  title: string;
  text: string;
}

const FeatureBox = ({ title, text }: FeatureBoxProps) => (
  <motion.div className="feature-box" whileHover={{ scale: 1.05 }}>
    <h3>{title}</h3>
    <p>{text}</p>
  </motion.div>
);

export default App;

