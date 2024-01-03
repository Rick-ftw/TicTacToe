import React from "react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <h5 className="footer-text">&copy; Rick Dutta {currentYear}</h5>
    </footer>
  );
};

export default Footer;
