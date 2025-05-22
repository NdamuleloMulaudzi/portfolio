import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; 
import Link from "next/link"
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section - Logo & Socials */}
        <div className="footer-top mb-7">
          <h2 className="footer-logo">Ndamulelo</h2>
          <div className="social-icons flex">
            <a href="https://github.com/NdamuleloMulaudzi" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ndamumulaudzi" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/ndamulelomulaudzi" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

      
        <div className="footer-links flex justify-center gap-4 ">
          <Link className="" href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
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