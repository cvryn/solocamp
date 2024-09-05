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
        <Link to="/about">Meet the Developers</Link>
        <span>© {currentYear} solocamp, inc.</span>
      </div>
    </footer>
  );
}


export default Footer
