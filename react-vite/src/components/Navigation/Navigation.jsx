import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import SearchBar from "./SearchBar";
import SecondaryNavigation from "./SecondaryNavigation"
import logo from "../../../public/logo.png"
import "./Navigation.css";


function Navigation() {
  const user = useSelector((store) => store.session.user);

  return (
    <nav id="container-main-navigation">
      <div className="container-primary-navigation">
        <div id="container-logo-search-navigation">
          <NavLink to="/">
            <img src={logo} alt="Logo" style={{ width: "150px", cursor: "pointer" }} />
          </NavLink>
          <SearchBar />
        </div>

        <ProfileButton />
      </div>

      {!user &&
        <div>
          <SecondaryNavigation />
        </div>}
    </nav>
  );
}


export default Navigation;
