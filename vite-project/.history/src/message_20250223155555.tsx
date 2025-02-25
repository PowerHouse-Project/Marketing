import React, { useState, Component } from "react";
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
          <FeatureBox imgSrc="logo.png" title="Real-Time Energy Tracking" text="We are always one step ahead." />
          <FeatureBox imgSrc="logo.png" title="User-Friendly Interface" text="We anticipate development in the market." />
          <FeatureBox imgSrc="logo.png" title="Cost-Saving" text="We achieve our goals with confidence." />
          <FeatureBox imgSrc="logo.png" title="Smart Automation" text="We build trust by keeping our promises." />
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

class App extends Component {
    render() {
        const myStyle = {
            backgroundImage:}
    }

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

interface BlogBoxProps {
  title: string;
}

const BlogBox = ({ title }: BlogBoxProps) => (
  <div className="blog-box">
    <h3>{title}</h3>
  </div>
);

export default App;
