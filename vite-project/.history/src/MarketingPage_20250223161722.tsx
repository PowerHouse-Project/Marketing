import React, { useState } from "react";
import "./App.css"; // Import external CSS file

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

      <Section id="home" title="See It in Action" children={undefined} />

      <Section id="about" title="Discover Our Story">
        <p>
        POWERHOUSE is a smart home platform designed to help you track, automate, and reduce energy consumption effortlessly. With real-time monitoring, smart automation, and cost-saving insights, POWERHOUSE optimizes your home’s energy use—saving you money while reducing your carbon footprint.
        No complicated setups or extra hardware required—just an intuitive app and website that put you in control of your energy usage. Whether you're at home or on the go, POWERHOUSE makes smart energy management simple and efficient.
        </p>
        <div className="features-container">
          <FeatureBox imgSrc="/src/logo.png" title="Real-Time Energy Tracking" text="We are always one step ahead; we challenge convention and push the boundaries of what can be achieved" />
          <FeatureBox imgSrc="/src/logo.png" title="User-Friendly Interface" text="We anticipate development in the market and industry; then move quickly to adapt our ways of working" />
          <FeatureBox imgSrc="/src/logo.png" title="Cost-Saving" text="We achieve our goals and consistently deliver with confidence, determination and professionalism" />
          <FeatureBox imgSrc="/src/logo.png" title="Smart Automation" text="We build trust by keeping our promises and doing what works for our Customers to ensure the resilience of our digital ecosystem" />
        </div>
      </Section>

      <Section id="blog" title="Blogs and Resources">
        <div className="blog-container">
          <BlogBox title="Sustainability" />
          <BlogBox title="Real-time Tracking" />
          <BlogBox title="Energy Saving" />
        </div>
      </Section>

      <section id="contact" className="section">
        <div className="newsletter-container">
          <h2 className="newsletter-title">Join Our Newsletter</h2>
          <p className="newsletter-description">Stay updated with the latest news, updates, and exclusive offers.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </section>


      <footer className="footer">
        <p>Customer Support</p>
        <p>Email: support@powerhouse.com</p>
      </footer>
    </div>
  );
};

const Section = ({ id, title, children }: { id: string; title: string; children?: React.ReactNode }) => (
  <section id={id} className="section">
    <div className="parallax">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
);

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

const BlogBox = ({ title }: { title: string }) => (
  <div className="blog-box">
    <h3>{title}</h3>
  </div>
);

export default App;
