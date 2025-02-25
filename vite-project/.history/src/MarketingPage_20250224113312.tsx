import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

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
      <nav className="navbar">
        <div className="logo">POWERHOUSE</div>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Welcome to POWERHOUSE
        </motion.h1>
        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }}>
          The future of smart home automation.
        </motion.p>
        <motion.video
          className="feature-video"
          controls
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <source src="/your-video.mp4" type="video/mp4" />
        </motion.video>
      </section>

      <section id="about" className="info-section">
        <div className="content-box">
          <h2>Discover Our Story</h2>
          <p>
            POWERHOUSE is designed to optimize your energy use with real-time monitoring, automation, and cost-saving insights.
          </p>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="features-container">
          <FeatureBox title="Real-Time Tracking" text="Stay ahead with live energy data." />
          <FeatureBox title="Smart Automation" text="Automate your devices effortlessly." />
          <FeatureBox title="Cost-Saving" text="Save money with optimized energy use." />
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@powerhouse.com</p>
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

