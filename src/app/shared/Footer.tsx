import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; 
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section - Logo & Socials */}
        <div className="footer-top mb-7">
          <h2 className="footer-logo">Ndamulelo</h2>
          <div className="social-icons flex">
            <a href="https://github.com/ndamulelom" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ndamulelomulaudzi/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/ndamulelomulaudzi" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

      
        <div className="footer-links mt-60">
        <a href="/about">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

      
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ndamulelo Mulaudzi. All Rights Reserved.</p>
          <p>Built with anger and passion.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
