import React, { useState } from "react";
import "./App.css";
import FeatureBox from "./FeatureBox";

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
            {/* Navbar */}
            <nav className="navbar">
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <button onClick={() => scrollToSection("home")}>Home</button>
                    <button onClick={() => scrollToSection("about")}>About Us</button>
                    <button onClick={() => scrollToSection("features")}>Features</button>
                    <button onClick={() => scrollToSection("contact")}>Contact Us</button>
                </div>
            </nav>

            {/* Parallax Sections */}
            <div className="bgimg-1">
                <div className="caption">
                    <span>Experience Smart Living</span>
                </div>
            </div>

            <section id="about" className="section">
                <h1>About Us</h1>
                <p>
                    POWERHOUSE is a smart home platform designed to help you track, automate, and reduce energy consumption effortlessly.
                    With real-time monitoring, smart automation, and cost-saving insights, POWERHOUSE optimizes your home’s energy use—saving 
                    you money while reducing your carbon footprint.
                </p>
            </section>

            <div className="bgimg-2">
                <div className="caption">
                    <span>Smart Features</span>
                </div>
            </div>

            <section id="features" className="section">
                <h1>Features</h1>
                <p>Explore the latest features to find out how POWERHOUSE can help bring safety and convenience to your daily life.</p>
                <div className="features-container">
                    <FeatureBox imgSrc="/assets/energy-tracking.svg" title="Real-Time Energy Tracking" text="Monitor and optimize your energy usage in real-time." />
                    <FeatureBox imgSrc="/assets/user-friendly.svg" title="User-Friendly Interface" text="An intuitive app that makes smart home management easy." />
                    <FeatureBox imgSrc="/assets/cost-saving.svg" title="Cost-Saving Insights" text="Get personalized tips to reduce your electricity bill." />
                    <FeatureBox imgSrc="/assets/smart-automation.svg" title="Smart Automation" text="Automate your home with AI-powered recommendations." />
                </div>
            </section>

            <div className="bgimg-3">
                <div className="caption">
                    <span>Join Our Newsletter</span>
                </div>
            </div>

            <section id="newsletter" className="newsletter-section">
                <div className="glass-box newsletter-box">
                    <h2>Join Our Newsletter</h2>
                    <p>Subscribe to stay updated on the latest energy-saving tips and innovations.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" className="input-field"/>
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                </div>
            </section>

            <section id="contact" className="footer-section full-width">
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
