import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">Your Dashboard &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
