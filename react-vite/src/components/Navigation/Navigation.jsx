import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import SearchBar from "./SearchBar";
import SecondaryNavigation from "./SecondaryNavigation"
import logo from "../../../public/logo.png"
import "./Navigation.css";


function Navigation() {
  return (
    <nav className="container-navigation">
      <div className="container-template-navigation">
        <div id="container-logo-search-navigation">
          <NavLink to="/">
            <img src={logo} id="logo" alt="Logo" />
          </NavLink>
          <SearchBar />
        </div>
        <ProfileButton />
      </div>

      <div>
        <SecondaryNavigation />
      </div>
    </nav>
  );
}


export default Navigation;
