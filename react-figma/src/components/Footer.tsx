import Logo from "../images/logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import bottomfile from "../images/bottomfile.png"

const Footer = () => {
  return (
    <><footer className="footer">
      <div>
        <div className="logo-block">
          <img src={Logo} alt="Zapatos Logo" />
        </div>
        <br></br>
        <div className="footer-desc">
          <p>
            Not just Shoes, but a Statement
            <br />
            Kicks Designed to Keep You One Step Ahead
          </p>
        </div>

        <br />
        <br />

        {/* SOCIAL ICONS */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>

          <a href="https://x.com" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>

        <br />

        <div>
          <p className="icon-text">📞 (804) 6623 - 9999</p>
          <br></br>
          <p className="icon-text">✉️ supportoursmallbusiness@g.com</p>
        </div>
      </div>
      <div>
        <h4>SHOP</h4>
        <br></br>
        <p>Men</p>
        <br></br>
        <p>Women</p>
        <br></br>
        <p>Kids</p>
      </div>

      <div>
        <h4>BRANDS</h4>
        <br></br>
        <p>Nike</p>
        <br></br>
        <p>Adidas</p>
        <br></br>
        <p>Vans</p>
        <br></br>
        <p>Fila</p>
        <br></br>
        <p>Brooks</p>
        <br></br>
        <p>Mizuna</p>
        <br></br>
        <p>Salomon</p>
      </div>

      <div>
        <h4>QUICK LINKS</h4>
        <br></br>
        <p>Return</p>
        <br></br>
        <p>Shipping</p>
        <br></br>
        <p>Terms & Conditions</p>
        <br></br>
        <p>Privacy Policy</p>
      </div>

      <div>
        <h4>SUPPORT</h4>
        <br></br>
        <p>Contact Us</p>
        <br></br>
        <p>About Us</p>
        <br></br>
        <p>FAQ</p>
      </div>
    </footer>
    <div className= "bottom-file">
      <img src={bottomfile} alt="Zapatos footer bar" />
    </div>
</>
    );
};
export default Footer;
