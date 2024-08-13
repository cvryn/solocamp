import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { PiShoppingCartSimple } from "react-icons/pi";
import "./Navigation.css";


function ProfileButton() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.session.user);
  const [showMenu, setShowMenu] = useState(false);


  const closeMenu = (e) => {
    e.stopPropagation(); // keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    closeMenu(); // ensure the menu closes after logout
  };

  return (
    <nav id="container-login-signup-navigation">
      {user ? (
        <>
          <NavLink to="/checkout"><PiShoppingCartSimple style={{ fontSize: "1.5rem" }} /></NavLink>
          {/* <PiShoppingCartSimpleFill style={{ fontSize: "1.5rem" }} /> */}
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <button>
            <OpenModalMenuItem
              itemText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
          </button>
          <button>
            <OpenModalMenuItem
              itemText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </button>
        </>
      )}
    </nav>
  );
}

export default ProfileButton;
