import React, { useState } from "react";
import "./App.css"; // Import external CSS file

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
          <button onClick={() => scrollToSection("contact")}>Contact Us</button>
        </div>
      </nav>

      <Section id="home" title="See It in Action" />

      <Section id="about" title="Discover Our Story">
        <p>
          POWERHOUSE is a smart home platform designed to help you track, automate, and reduce energy consumption effortlessly. 
          With real-time monitoring, smart automation, and cost-saving insights, POWERHOUSE optimizes your home’s energy use.
        </p>
        <div className="features-container">
          <FeatureBox imgSrc="/icons/energy.png" title="Real-Time Energy Tracking" text="We are always one step ahead." />
          <FeatureBox imgSrc="/icons/interface.png" title="User-Friendly Interface" text="We anticipate development in the market." />
          <FeatureBox imgSrc="/icons/savings.png" title="Cost-Saving" text="We achieve our goals with confidence." />
          <FeatureBox imgSrc="/icons/automation.png" title="Smart Automation" text="We build trust by keeping our promises." />
        </div>
      </Section>

      <Section id="blog" title="Blogs and Resources">
        <div className="blog-container">
          <BlogBox title="Sustainability" />
          <BlogBox title="Real-time Tracking" />
          <BlogBox title="Energy Saving" />
        </div>
      </Section>

      <Section id="contact" title="Join Our Newsletter">
        <input type="email" placeholder="Enter your email" className="input-field" />
        <button className="subscribe-button">Subscribe</button>
      </Section>

      <footer className="footer">
        <p>Customer Support</p>
        <p>Email: support@powerhouse.com</p>
      </footer>
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
