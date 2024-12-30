import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.png";
import "../styles/navbar.css";
console.log(logo);
import { Link } from "react-router-dom";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false); // Close menu when a link is clicked
  };

  return (
    <div className="header">
      {/* Text Slider */}
      <div className="text-slider">
        <div className="slide">Mexican Tamales </div>
        <div className="slide">Brookhaven,GA</div>
        <div className="slide">Preorder 2 days in advanced</div>
        <div className="slide">We Cater</div>
      </div>

      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Rricura Tamales Logo" className="logo" />
        </div>
        <div className="nav-links-container">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/@yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>

          <ul className={`nav-links ${menuActive ? "active" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/OrderPage">Order Tamales</Link>
            </li>
            <li>
              <Link to="/CheckoutPage">Check Out</Link>
            </li>
          </ul>

          <Link to="/cartPage">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>

          {/* Hamburger icon for mobile */}
          <FontAwesomeIcon
            icon={faBars}
            className="hamburger"
            onClick={toggleMenu}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
