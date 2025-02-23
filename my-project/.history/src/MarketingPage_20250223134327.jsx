import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
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
          <button onClick={() => scrollToSection("contact")}>Contact Us</button>
        </div>
      </nav>

      <section id="home" className="section">
        <div className="parallax">
          <h1>See It in Action</h1>
        </div>
      </section>

      <section id="about" className="section">
        <div className="parallax">
          <h2>Discover Our Story</h2>
          <p>
            POWERHOUSE is a smart home platform designed to help you track, automate, and reduce
            energy consumption effortlessly.
          </p>
        </div>
        <div className="features-container">
          <FeatureBox imgSrc="logo.png" title="Real-Time Energy Tracking" text="We are always one step ahead; we challenge convention and push the boundaries of what can be achieved" />
          <FeatureBox imgSrc="logo.png" title="User-Friendly Interface" text="We anticipate development in the market and industry; then move quickly to adapt our ways of working" />
          <FeatureBox imgSrc="logo.png" title="Cost-Saving" text="We achieve our goals and consistently deliver with confidence, determination and professionalism" />
          <FeatureBox imgSrc="logo.png" title="Smart Automation" text="We build trust by keeping our promises and doing what works for the Nation and our Customers to ensure the resilience of our digital ecosystem." />
        </div>
      </section>

      <section className="section">
        <div className="parallax">
          <h2>Blogs and Resources</h2>
          <div className="blog-container">
            <BlogBox title="Sustainability" />
            <BlogBox title="Real-time Tracking" />
            <BlogBox title="Energy Saving" />
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="parallax">
          <h2>Join Our Newsletter</h2>
          <input type="email" placeholder="Enter your email" className="input-field" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </section>

      <footer className="footer">
        <p>Customer Support</p>
        <p>Email: support@powerhouse.com</p>
      </footer>
    </div>
  );
};

const FeatureBox = ({ imgSrc, title, text }) => (
  <div className="feature-box">
    <img src={''} alt={title} />
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