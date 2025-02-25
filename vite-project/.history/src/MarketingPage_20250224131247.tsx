import React, { useState } from "react";
import "./App.css";

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
            <div className="sections">
                
</div>

            <section id="home" className="section">
                <div className="parallax">
                    <h1>See It in Action</h1>
                </div>
            </section>
        </div>
    );
}