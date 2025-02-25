import React, { useState } from "react";
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
        <div className="logo">PowerHouse</div>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About Us</button>
          <button onClick={() => scrollToSection("features")}>Features</button>
          <button onClick={() => scrollToSection("contact")}>Contact Us</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Experience Smart Living</h1>
          <p>Control, track, and optimize your home’s energy use effortlessly.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>Discover Our Story</h2>
          <p>
            POWERHOUSE is a smart home platform designed to help you track, automate,
            and reduce energy consumption effortlessly. No complicated setups—just an intuitive app that
            puts you in control.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <FeatureBox imgSrc="/src/logo.png" title="Real-Time Energy Tracking" text="We are always one step ahead." />
          <FeatureBox imgSrc="/src/logo.png" title="User-Friendly Interface" text="We anticipate market development." />
          <FeatureBox imgSrc="/src/logo.png" title="Cost-Saving" text="We achieve our goals with confidence." />
          <FeatureBox imgSrc="/src/logo.png" title="Smart Automation" text="We build trust by keeping our promises." />
        </div>
      </section>

      {/* Newsletter Section */}
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

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <footer className="footer">
          <h2>Contact Us</h2>
          <p>Have questions? Get in touch with us!</p>
          <p>Email: support@powerhouse.com</p>
        </footer>
      </section>
    </div>
  );
};

interface FeatureBoxProps {
  imgSrc: string;
  title: string;
  text: string;
}

const FeatureBox = ({ imgSrc, title, text }: FeatureBoxProps) => (
  <div className="feature-box">
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default App;
