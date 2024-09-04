import { Link } from "react-router-dom";
import logo from "../../../public/logo-inverted.png"
import "./Footer.css"


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <Link to="/">
          <img src={logo}
            alt="Logo"
            style={{ width: "150px", verticalAlign: "text-bottom", cursor: "pointer" }}
          />
        </Link>
        <div id="container-quick-links-footer">
          <Link to="/about">About</Link>
          <span style={{ cursor: "not-allowed" }}>Help</span>
          <span style={{ cursor: "not-allowed" }}>Terms of Use</span>
          <span style={{ cursor: "not-allowed" }}>Privacy</span>
          <span>© {currentYear} solocamp, inc.</span>
        </div>
      </div>
    </footer>
  );
}


export default Footer
