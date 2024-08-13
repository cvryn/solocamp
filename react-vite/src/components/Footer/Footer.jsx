import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png"
import "./Footer.css"


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <span>© {currentYear} solocamp, inc.</span>
        <NavLink to="/">
          <img src={logo}
            id="logo"
            alt="Logo"
          />
        </NavLink>
      </div>
    </footer>
  )
}


export default Footer
