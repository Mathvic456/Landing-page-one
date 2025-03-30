import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer stylish-footer">
      <div className="footer-container">
        {/* Brand & About */}
        <div className="footer-section">
          <h2 className="footer-brand">Codesk</h2>
          <p className="footer-text">
            There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form.
          </p>
        </div>

        {/* Our Office & Contact */}
        <div className="footer-section">
          <h3 className="footer-heading">Our Office</h3>
          <p className="footer-text">Remote & Available 24/7, Worldwide</p>
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">123 Business Street, NY 10001</p>
          <p className="footer-text">info@yourdomain.com</p>
          <p className="footer-text">+01 123 456 7890</p>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="footer-text">Stay up to date with our latest updates and news.</p>
          <div className="footer-newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-input stylish-input"
            />
            <button className="footer-button stylish-button">➤</button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom stylish-bottom">
        <p className="footer-text">© 2024 Codesk. All Rights Reserved</p>
        <div className="footer-icons stylish-icons">
          <FaFacebookF className="footer-icon stylish-icon" />
          <FaTwitter className="footer-icon stylish-icon" />
          <FaInstagram className="footer-icon stylish-icon" />
        </div>
      </div>
    </footer>
  );
}
