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
                    <button onClick={() => scrollToSection("features")}>Features</button>
                    <button onClick={() => scrollToSection("contact")}>Contact Us</button>
                </div>
            </nav>

            <div id="home" className="bgimg-1">
                <div className="caption">
                    <h1>Experience Smart Living</h1>
                    <h2>A Connected Home is a Powered Home</h2>
                </div>
            </div>

            <section id="about" className="section parallax-container">
                <div className="glass-box about-box">
                    <h1>About Us</h1>
                    <p>
                    POWERHOUSE is a smart home platform designed to help you track, automate, and reduce energy consumption effortlessly. With real-time monitoring, smart automation, and cost-saving insights, POWERHOUSE optimizes your home’s energy use—saving you money while reducing your carbon footprint.
                    No complicated setups or extra hardware required—just an intuitive app and website that put you in control of your energy usage. Whether you're at home or on the go, POWERHOUSE makes smart energy management simple and efficient.
                    </p>
                </div>
            </section>

            <div className="bgimg-2">
            <section id="features" className="features-container">
            <div className="features-container">
    <h2 className="features-title">Our Features</h2>
    <div className="features-grid">
        <div className="feature-card">
            <h3>Real-Time Energy Tracking</h3>
            <p>Monitor and optimize your energy usage.</p>
        </div>
        <div className="feature-card">
            <h3>User-Friendly Interface</h3>
            <p>Easy-to-use platform with intuitive controls.</p>
        </div>
        <div className="feature-card">
            <h3>Cost-Saving</h3>
            <p>Reduce your electricity bills with smart insights.</p>
        </div>
        <div className="feature-card">
            <h3>Smart Automation</h3>
            <p>Automate your home for efficiency.</p>
        </div>
    </div>
</div>

</section>

            </div>

            <div className="bgimg-3">
            <section id="newsletter" className="newsletter-section">
                <div className="glass-box newsletter-box">
                    <h2>Stay upated with the latest news! Join Our Newsletter Now!</h2>
                    <p>Subscribe to stay updated on the latest energy-saving tips and innovations.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" className="input-field" />
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                </div>
            </section>
            </div>

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

export default App;
