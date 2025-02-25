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
      <section id="about" className="section full-width-black about-section">
        <div className="about-content">
          <h2>Discover Our Story</h2>
          <p>
            POWERHOUSE is a smart home platform designed to help you track, automate, and reduce energy consumption effortlessly. With real-time monitoring, smart automation, and cost-saving insights, POWERHOUSE optimizes your home’s energy use—saving you money while reducing your carbon footprint.
            No complicated setups or extra hardware required—just an intuitive app and website that put you in control of your energy usage. Whether you're at home or on the go, POWERHOUSE makes smart energy management simple and efficient.
          </p>
        </div>
      </section>
      
  <section id="features" className="section">
  <div className="features-container">
          <FeatureBox imgSrc="/src/logo.png" title="Real-Time Energy Tracking" text="We are always one step ahead; we challenge convention and push the boundaries of what can be achieved" />
          <FeatureBox imgSrc="/src/logo.png" title="User-Friendly Interface" text="We anticipate development in the market and industry; then move quickly to adapt our ways of working" />
          <FeatureBox imgSrc="/src/logo.png" title="Cost-Saving" text="We achieve our goals and consistently deliver with confidence, determination and professionalism" />
          <FeatureBox imgSrc="/src/logo.png" title="Smart Automation" text="We build trust by keeping our promises and doing what works for our Customers to ensure the resilience of our digital ecosystem" />
        </div>
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

const Section = ({ id, title, children }: { id: string; title: string; children?: React.ReactNode }) => (
  <section id={id} className="section">
    <div className="parallax">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
);

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

const BlogBox = ({ title }: { title: string }) => (
  <div className="blog-box">
    <h3>{title}</h3>
  </div>
);

export default App;
