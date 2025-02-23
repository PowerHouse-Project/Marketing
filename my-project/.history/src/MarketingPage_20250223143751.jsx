<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PowerHouse</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            margin: 0;\n            padding: 0;\n            font-family: Arial, sans-serif;\n           " background: url('/') no-repeat center center fixed;"\n            background-size: cover;\n            color: white;\n            overflow-x: hidden;\n        }\n        nav {\n            position: fixed;\n            top: 0;\n            right: 20px;\n            display: flex;\n            gap: 20px;\n            background: rgba(0, 0, 0, 0.5);\n            backdrop-filter: blur(10px);\n            padding: 10px 20px;\n            border-radius: 10px;\n            z-index: 1000;\n        }\n        nav button {\n            background: transparent;\n            border: none;\n            color: white;\n            font-size: 18px;\n            cursor: pointer;\n            padding: 10px;\n        }\n        .section {\n            height: 100vh;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            text-align: center;\n            flex-direction: column;\n            padding: 50px;\n        }\n        .parallax {\n            background: rgba(255, 255, 255, 0.1);\n            backdrop-filter: blur(10px);\n            border-radius: 20px;\n            padding: 40px;\n            width: 80%;\n            max-width: 900px;\n        }\n        .features-container {\n            display: flex;\n            justify-content: space-between;\n            flex-wrap: wrap;\n            max-width: 1000px;\n            margin-top: 40px;\n        }\n        .feature-box {\n            background: rgba(255, 255, 255, 0.1);\n            backdrop-filter: blur(10px);\n            padding: 20px;\n            border-radius: 10px;\n            flex: 1;\n            margin: 10px;\n            text-align: center;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n        .feature-box img {\n            width: 50px;\n            height: 50px;\n            margin-bottom: 10px;\n        }\n        .blog-container {\n            display: flex;\n            justify-content: center;\n            gap: 20px;\n            margin-top: 40px;\n        }\n        .blog-box {\n            background: rgba(255, 255, 255, 0.1);\n            backdrop-filter: blur(10px);\n            padding: 20px;\n            border-radius: 10px;\n            width: 300px;\n            text-align: center;\n        }\n        .newsletter {\n            margin-top: 40px;\n            text-align: center;\n        }\n        .footer {\n            text-align: center;\n            padding: 20px;\n            background: rgba(0, 0, 0, 0.5);\n            backdrop-filter: blur(10px);\n        }\n    ",
    }}
  />
  <nav>
    <button onclick="scrollToSection('home')">Home</button>
    <button onclick="scrollToSection('about')">About Us</button>
    <button onclick="scrollToSection('contact')">Contact Us</button>
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
        POWERHOUSE is a smart home platform designed to help you track,
        automate, and reduce energy consumption effortlessly. With real-time
        monitoring, smart automation, and cost-saving insights, POWERHOUSE
        optimizes your home’s energy use—saving you money while reducing your
        carbon footprint. No complicated setups or extra hardware required—just
        an intuitive app and website that put you in control of your energy
        usage. Whether you're at home or on the go, POWERHOUSE makes smart
        energy management simple and efficient.
      </p>
    </div>
    <div className="features-container">
      <div className="feature-box">
        <img src="logo.png" alt="Cost-Saving" />
        <div>
          <h3>Real-Time Energy Tracking</h3>
          <p>
            We are always one step ahead; we challenge convention and push the
            boundaries of what can be achieved
          </p>
        </div>
      </div>
      <div className="feature-box">
        <img src="logo.png" alt="User-Friendly Interface" />
        <div>
          <h3>User-Friendly Interfac</h3>
          <p>
            We anticipate development in the market and industry; then move
            quickly to adapt our ways of working
          </p>
        </div>
      </div>
      <div className="feature-box">
        <img src="logo.png" alt="Cost-Saving" />
        <div>
          <h3>Cost-Saving</h3>
          <p>
            We achieve our goals and consistently deliver with confidence,
            determination and professionalism
          </p>
        </div>
      </div>
      <div className="feature-box">
        <img src="logo.png" alt="Smart Automation" />
        <div>
          <h3>Smart Automation</h3>
          <p>
            We build trust by keeping our promises and doing what works for the
            Nation and our Customers to ensure the resilience of our digital
            ecosystem.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="section">
    <div className="parallax">
      <h2>Blogs and Resources</h2>
      <div className="blog-container">
        <div className="blog-box">Sustainability</div>
        <div className="blog-box">Real-time Tracking</div>
        <div className="blog-box">Energy Saving</div>
      </div>
    </div>
  </section>
  <section id="contact" className="section">
    <div className="parallax">
      <h2>Join Our Newsletter</h2>
      <input
        type="email"
        placeholder="Enter your email"
        style={{ padding: 10, borderRadius: 5, border: "none" }}
      />
      <button
        style={{
          padding: "10px 20px",
          marginTop: 10,
          borderRadius: 5,
          background: "white",
          color: "black",
          border: "none",
        }}
      >
        Subscribe
      </button>
    </div>
  </section>
  <footer className="footer">
    <p>Customer Support</p>
    <p>Email: support@powerhouse.com</p>
  </footer>
</div>;