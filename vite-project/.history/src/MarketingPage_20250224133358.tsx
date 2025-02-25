import React, { useState } from "react";
import "./App.css";
import FeatureBox from "./FeatureBox";
import BlogBox from ".//BlogBox";

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
          <FeatureBox imgSrc="src/bx-universal-access.svg" title="Real-Time Energy Tracking" text="We are always one step ahead." />
          <FeatureBox imgSrc="src/bx-universal-access.svg" title="User-Friendly Interface" text="We anticipate development in the market." />
          <FeatureBox imgSrc="src/bx-universal-access.svg" title="Cost-Saving" text="We achieve our goals with confidence." />
          <FeatureBox imgSrc="src/bx-universal-access.svg" title="Smart Automation" text="We build trust by keeping our promises." />
        </div>
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
</div>
);
};

export default App;