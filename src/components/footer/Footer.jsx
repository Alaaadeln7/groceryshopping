import { Link } from "react-router-dom";
import "./footer.scss";
import Logo from "../header/Logo"
import { FaFacebookF, FaInstagram, FaLocationArrow, FaPhone, FaTwitter, FaVoicemail, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="info">
          <div className="logo"><Logo /></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quos.</p>
          <div className="social-media">
            <ul>
              <li><Link to="https://www.facebook.com" target="_balnk"><FaFacebookF /></Link></li>
              <li><Link to="https://www.twitter.com" target="_balnk"><FaTwitter /></Link></li>
              <li><Link to="https://www.youtube.com" target="_balnk"><FaYoutube /></Link></li>
              <li><Link to="https://www.instagram.com" target="_balnk"><FaInstagram /></Link></li>
            </ul>
          </div>
        </div>
        <div className="about">
          <h3>About Us</h3>
          <ul>
            <li><Link to={"/about"}>about Us</Link></li>
            <li><a href="#">Why Us</a></li>
            <li><a href="#">scurity</a></li>
            <li><a href="#">testmiantion</a></li>
          </ul>
        </div>

        <div className="Categories">
          <h3>Categories</h3>
          <ul>
            <li><Link to={"/categories"}>Categories</Link></li>
            <li><a href="#">Button</a></li>
            <li><a href="#">Diary Products</a></li>
            <li><a href="#">Fruits & Vegetables</a></li>
          </ul>
        </div>

        <div className="help">
          <h3>Help</h3>
          <ul>
            <li><Link to={"/"}>Contact Us</Link></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Privacy Police</a></li>
            <li><a href="#">Terms & condations</a></li>
          </ul>
        </div>

        <div className="contact-us">
          <h3>Contact Us</h3>
          <ul>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li><a href="#"><FaPhone /> +123 456 789</a></li>
            <li><a href="#"><FaVoicemail /> test@gmail.com</a></li>
            <li><a href="#"><FaLocationArrow /> Egypt , Cairo</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}