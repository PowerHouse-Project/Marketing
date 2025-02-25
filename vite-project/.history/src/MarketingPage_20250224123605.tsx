import React, { useState } from "react";
import "./App.css"; // Import external CSS file

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
                <div classNmae=
                <h1>Experience Smart Living</h1>
                <p>A Connect Home is a Powered Home</p>
            </section>

            
        </div>
    )
};



export default App;