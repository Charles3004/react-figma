import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import infoCircle from "../images/infoCircle.png";
import dropDownArrow from "../images/dropDownArrow.svg";
import profileImage from "../images/profileImage.svg";
import shoppingCart from "../images/shoppingBag.svg";

const Header = () => {
  return (
    <>
      <div className="top-bar">
        <p>✨ Free shipping & 365-day returns</p>
      </div>

      <header className="top-header">
        {/* LEFT — LOGO */}
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="Zapatos" className="logo" />
          </Link>
        </div>

        {/* SEARCH BAR */}
        <div className="search-box">
          <input type="text" placeholder="Search for products" />
          <button>🔍</button>
        </div>

        {/* RIGHT ICONS */}
        <div className="header-icons">
          <button className="icon-text">📞 (804) 6623 - 9999</button>

          <button className="icon-text">
            ✉️ supportoursmallbusiness@gmail.com
          </button>
        </div>

        <div className="dropdown">
          <button className="icon-btn info-btn">
            <img src={infoCircle} alt="Info" className="icon-img" />
            <img src={dropDownArrow} alt="Dropdown" className="arrow-img" />
          </button>

          <div className="dropdown-menu">
            <button>About Us</button>
            <button>FAQs</button>
            <button>Help</button>
          </div>
        </div>

        <button className="icon-btn">
          <img src={profileImage} alt="Profile" className="icon-img" />
          <img src={dropDownArrow} alt="Dropdown" className="arrow-img" />
        </button>

        <button className="icon-btn">
          🤍
          <img src={dropDownArrow} alt="Dropdown" className="arrow-img" />
        </button>

        <button className="icon-btn cart">
          <img src={shoppingCart} alt="Cart" className="icon-img" />
          <span className="cart-badge">1</span>
        </button>
      </header>
    </>
  );
};

export default Header;
