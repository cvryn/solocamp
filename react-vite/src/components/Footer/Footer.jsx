import { Link } from "react-router-dom";
import logo from "../../../public/logo.png"
import "./Footer.css"


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <Link to="/">
          <img src={logo}
            alt="Logo"
            style={{ width: "150px", verticalAlign: "text-bottom" }}
          />
        </Link>
        <div id="container-quick-links-footer">
          <span>About</span>
          <span>Help</span>
          <span>Terms of Use</span>
          <span>Privacy</span>
          <span>© {currentYear} solocamp, inc.</span>
        </div>
      </div>
    </footer>
  )
}


export default Footer
