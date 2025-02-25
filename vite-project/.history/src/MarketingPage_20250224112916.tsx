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
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About Us</button>
          <button onClick={() => scrollToSection("features")}>Features</button>
          <button onClick={() => scrollToSection("blog")}>Blog</button>
          <button onClick={() => scrollToSection("newsletter")}>Newsletter</button>
          <button onClick={() => scrollToSection("contact")}>Contact Us</button>
        </div>
      </nav>

      <section id="home" className="full-width-black">
        <div className="center-content">
          <h1>See It in Action</h1>
          <motion.video
            className="feature-video"
            controls
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </div>
      </section>

      <section id="about" className="section full-width-black about-section">
        <div className="about-content">
          <h2>Discover Our Story</h2>
          <p>
            POWERHOUSE is a smart home platform designed to help you track, automate,
            and reduce energy consumption effortlessly. With real-time monitoring,
            smart automation, and cost-saving insights, POWERHOUSE optimizes your
            home’s energy use—saving you money while reducing your carbon footprint.
          </p>
        </div>
      </section>

      <section id="features" className="section">
        <motion.div 
          className="features-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FeatureBox imgSrc="/src/logo.png" title="Real-Time Energy Tracking" text="Track your energy usage in real-time and make informed decisions." />
          <FeatureBox imgSrc="/src/logo.png" title="User-Friendly Interface" text="Intuitive and easy-to-use design for seamless experience." />
          <FeatureBox imgSrc="/src/logo.png" title="Cost-Saving" text="Reduce energy waste and save money effortlessly." />
          <FeatureBox imgSrc="/src/logo.png" title="Smart Automation" text="Automate your home’s energy consumption intelligently." />
        </motion.div>
      </section>

      <Section id="blog" title="Blogs and Resources">
        <div className="blog-container">
          <BlogBox title="Sustainability" />
          <BlogBox title="Real-time Tracking" />
          <BlogBox title="Energy Saving" />
        </div>
      </Section>

      <section id="newsletter" className="newsletter-section">
        <div className="glass-box newsletter-box">
          <h2>Join Our Newsletter</h2>
          <p>Subscribe to stay updated on the latest energy-saving tips and innovations.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="input-field" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </section>

      <section id="contact" className="footer-section">
        <footer className="footer">
          <h2>Contact Us</h2>
          <p>Have questions? Get in touch with us!</p>
          <p>Email: support@powerhouse.com</p>
        </footer>
      </section>
    </div>
  );
};

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <div className="parallax">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
);

const FeatureBox = ({ imgSrc, title, text }) => (
  <div className="feature-box">
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const BlogBox = ({ title }) => (
  <div className="blog-box">
    <h3>{title}</h3>
  </div>
);

export default App;

