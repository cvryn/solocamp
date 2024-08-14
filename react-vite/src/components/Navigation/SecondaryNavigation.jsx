import { NavLink } from "react-router-dom";
import "./Navigation.css";


function SecondaryNavigation() {
  return (
    <nav id="container-secondary-navigation">
      <div className="container-left-right-secondary-navigation">
        <NavLink to="/albums">Genres</NavLink>
        <NavLink to="/">Vinyl</NavLink>
        <NavLink to="/">CDs</NavLink>
        <NavLink to="/">Cassettes</NavLink>
        <NavLink to="/">T-shirts</NavLink>
      </div>
      <div className="container-left-right-secondary-navigation">
        <NavLink to="/">Radio</NavLink>
        <NavLink to="/">Solocamp Daily</NavLink>
        <NavLink to="/">Best of&apos;s</NavLink>
      </div>
    </nav>
  );
}


export default SecondaryNavigation
