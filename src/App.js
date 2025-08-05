import React, { useState } from "react";
import "./Styles.css";

const Portfolio = () => {
  // Add state for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        crossOrigin="anonymous"
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
          zIndex: -1,
        }}
      ></div>

      <header>
        <button className="logo">Neel</button>

        <div
          className={`menu-btn ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={isMenuOpen ? "active" : ""}>
          <a href="#home" className="active">
            Home
          </a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-img">
          <img src="Images/black-panther-5120x2880-17819.jpg" alt="Profile" />
        </div>

        <div className="home-content">
          <h1>
            Hi, it's <span>Neel</span>
          </h1>

          <h3 className="typing-text">
            i'm a <span></span>
          </h3>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            sapiente amet eligendi dignissimos asperiores aliquid, fuga,
            laboriosam vero ipsa, inventore neque soluta officia. Ipsum dolorem
            ipsa ut! Esse, veniam ad! Quidem blanditiis dolores vitae tempora
            voluptatibus veniam? Omnis quia magni, voluptate, eius esse
            voluptatibus porro cupiditate quo nostrum tempora corrupti?
          </p>

          <div className="social-icons">
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/neel-panchal-086285358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>

            <div className="github">
              <a href="https://github.com/NeelPanchal05">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>

            <div className="twitter">
              <a href="https://twitter.com/your-handle">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>

            <div className="instagram">
              <a href="https://www.instagram.com/_neel_0505/profilecard/?igsh=MTJzcjJoNG4zN2M1aw==">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>

            <div className="whatsapp">
              <a href="https://wa.me/+919913763801">
                <i className="fa-brands fa-whatsapp" id="whatsapp"></i>
              </a>
            </div>
          </div>

          <button className="btn">Hire me</button>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
