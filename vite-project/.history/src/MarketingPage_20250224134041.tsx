import React, { useState } from "react";
import "./App.css";
import FeatureBox from "./FeatureBox";
import BlogBox from "./BlogBox";

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    return (
        <div className="App">
            <nav className="navbar">
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <button onClick={() => scrollToSection("home")}>Home</button>
                    <button onClick={() => scrollToSection("about")}>About Us</button>
                    <button onClick={() => scrollToSection("services")}>Features</button>
                    <button onClick={() => scrollToSection("contact")}>Contact Us</button>
                </div>
            </nav>

<div>
    <section id="home" className="full-width">
        <div className="center-content">
            <h1>Experience Smart Living</h1>
            <p>A Connect Home is a Powered Home</p>
        </div>
    </section>
    <section id="about" className="section">
        <div className="parallax">
            <h1>About Us</h1>
            <p>
            POWERHOUSE is a smart home platform designed to help you track, automate, and reduce energy consumption effortlessly. With real-time monitoring, smart automation, and cost-saving insights, POWERHOUSE optimizes your home’s energy use—saving you money while reducing your carbon footprint.
            No complicated setups or extra hardware required—just an intuitive app and website that put you in control of your energy usage. Whether you're at home or on the go, POWERHOUSE makes smart energy management simple and efficient.
            </p>
        </div>
    </section>

                <div className="features-container">
                    <FeatureBox imgSrc="/src/bx-universal-access.svg" title="Real-Time Energy Tracking" text="We are always one step ahead; we challenge convention and push the boundaries of what can be achieved" />
                    <FeatureBox imgSrc="src/bx-universal-access.svg" title="User-Friendly Interface" text="We anticipate development in the market and industry; then move quickly to adapt our ways of working" />
                    <FeatureBox imgSrc="src/bx-universal-access.svg" title="User-Friendly Interface" text="We anticipate development in the market and industry; then move quickly to adapt our ways of working" />
        </div>
            
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
        </div>
    );
};

export default App;