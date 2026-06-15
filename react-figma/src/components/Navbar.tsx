import { Link } from "react-router-dom";

import profileImage from "../images/profileImage.svg";
import shoppingCart from "../images/shoppingBag.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* CENTER — NAVIGATION */}
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">
              MEN <span>▾</span>
            </a>
            <ul className="dropdown">
              <li>
                <a href="#">Sneakers</a>
              </li>
              <li>
                <a href="#">Boots</a>
              </li>
              <li>
                <a href="#">Sandals</a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#">
              KIDS <span>▾</span>
            </a>
            <ul className="dropdown">
              <li>
                <a href="#">Boys</a>
              </li>
              <li>
                <a href="#">Girls</a>
              </li>
              <li>
                <a href="#">Baby</a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#">
              WOMEN <span>▾</span>
            </a>
            <ul className="dropdown">
              <li>
                <a href="#">Sneakers</a>
              </li>
              <li>
                <a href="#">Heels</a>
              </li>
              <li>
                <a href="#">Flats</a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#">
              SPORT <span>▾</span>
            </a>
            <ul className="dropdown">
              <li>
                <a href="#">Running</a>
              </li>
              <li>
                <a href="#">Training</a>
              </li>
              <li>
                <a href="#">Outdoor</a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#">
              BRANDS <span>▾</span>
            </a>
            <ul className="dropdown">
              <li>
                <a href="#">Nike</a>
              </li>
              <li>
                <a href="#">Adidas</a>
              </li>
              <li>
                <a href="#">Puma</a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#">
              SANDALS <span>▾</span>
            </a>
            <ul className="dropdown">
              <li>
                <a href="#">Slides</a>
              </li>
              <li>
                <a href="#">Flip-Flops</a>
              </li>
              <li>
                <a href="#">Outdoor</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* RIGHT — ICONS */}
      <div className="nav-right">
        <Link to="/product" className="icon-btn">
          <img src={shoppingCart} alt="Product" />
        </Link>

        <Link to="/join" className="icon-btn">
          <img src={profileImage} alt="Profile" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
