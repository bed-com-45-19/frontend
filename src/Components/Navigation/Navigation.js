import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";   
export default function Navigation() {
    return (
      <nav className="navbar">
        <h1 className="logo">hozie</h1>
        <ul className="nav-links">
          
                <li className="ctn"><Link className="links" to="/Navigation">BOOK HERE</Link></li>
                {/* <li className="ctn"><Link className="links" to="/about-us">About Us</Link></li> */}
               
                {/* <li className="ctn"><Link className="links" to="/contact-us">Products</Link></li> */}
                <li className="ctn"><Link className="links" to="/login">Log In</Link></li>
                <li className="ctn"><Link className="links" to="/signup">Sign Up</Link></li>
                {/* <li className="ctn"><Link className="links" to="/contact-us">Home</Link></li> */}
        </ul>
      </nav>
    );
}
