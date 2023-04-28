import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ARTEEZ HR | Designed by Amit Mali
      </div>
    </footer>
  );
}

export default Footer;
