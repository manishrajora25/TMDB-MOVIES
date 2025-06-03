import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="#">Terms Of Use</a>
        <a href="#">Privacy-Policy</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">FAQ</a>
      </div>
      <p className="footer-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="footer-social">
        <a href="https://www.facebook.com/" className="facebook_icon">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/accounts/emailsignup/" className="instagram_icon">
          <FaInstagram />
        </a>
        <a href="https://x.com/" className="Twitter_icon">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/feed/" className="linkdin_icon">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
