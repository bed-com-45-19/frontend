import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription">
            Book the flight to day and you will be given a chance to wing a free
            ticket
          </p>

          <p className="footer-subscription-text">
            Book the flight to day and you will be given a chance to wing a free
            ticket
          </p>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="footer-input"
            />
            <button buttonStyle="btn-outline">Subscribe</button>
          </form>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/sign-up">SignUp</Link>
              <Link to="/login">LogIn</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="footer-logo">
                TRVL <i className="fab fa-typo3"></i>
              </Link>
            </div>
            <small className="website-rights">TRVL @ 2022</small>

            <div className="social-icons">
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                arial-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                arial-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                arial-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                arial-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                arial-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                arial-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </Link>
             
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
