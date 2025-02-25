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

            <section id="home" className="home">
                <h1>Welcome to our website</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    condimentum tortor sem, eget facilisis felis imperdiet a. Donec
                    ultricies, sem id tincidunt volutpat, sem mi varius turpis, id
                    ultricies mi libero nec nunc. Ut et eros auctor, tincidunt ligula
                    ac, tincidunt orci. Nullam vel libero nec velit lacinia tincidunt.
                    Nullam nec eros nec nunc ultricies varius. Nullam sit amet
                    consectetur metus.
                </p>
        </div>
    )
};



export default App;