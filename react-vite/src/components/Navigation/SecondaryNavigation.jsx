import { NavLink } from "react-router-dom";
import "./Navigation.css";


function SecondaryNavigation() {
  return (
    <nav id="container-secondary-navigation">
      <div className="container-left-right-secondary-navigation">
        <NavLink to="/albums">Genres</NavLink>
        {/* <NavLink to="" style={{ cursor: "not-allowed" }}>Vinyl</NavLink>
        <NavLink to="" style={{ cursor: "not-allowed" }}>CDs</NavLink>
        <NavLink to="" style={{ cursor: "not-allowed" }}>Cassettes</NavLink>
        <NavLink to="" style={{ cursor: "not-allowed" }}>T-shirts</NavLink> */}
      </div>
      <div className="container-left-right-secondary-navigation">
        {/* <NavLink to="" style={{ cursor: "not-allowed" }}>Radio</NavLink>
        <NavLink to="" style={{ cursor: "not-allowed" }}>Solocamp Daily</NavLink>
        <NavLink to="" style={{ cursor: "not-allowed" }}>Best of&apos;s</NavLink> */}
      </div>
    </nav>
  );
}


export default SecondaryNavigation
