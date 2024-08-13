import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import "./Navigation.css";


function NavigationCheckout() {
  return (
    <nav className="container-navigation">
      <div className="container-template-navigation">
        <NavLink to="/"><img src={logo} id="logo" alt="Logo" /></NavLink>
        <NavLink to="/"><div id="circle-icon"></div></NavLink>
      </div >
    </nav>
  );
}


export default NavigationCheckout
