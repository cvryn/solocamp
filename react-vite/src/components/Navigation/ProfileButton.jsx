import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { PiShoppingCartSimple } from "react-icons/pi";
import { SlHeart } from "react-icons/sl";
import "./Navigation.css";


function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
  const ulRef = useRef();

  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation(); // keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    closeMenu();
    navigate("/");
  };

  return (
    <nav id="container-user-navigation" style={{ position: "relative" }}>
      {user ? (
        <>
          <NavLink to="/checkout">
            <PiShoppingCartSimple style={{ fontSize: "2rem" }} />
          </NavLink>

          <NavLink to="/user">
            <SlHeart style={{ fontSize: "1.7rem", marginTop: "2px" }} />
          </NavLink>

          <div id="circle-div"
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          />

          {showMenu && (
            <ul id="container-profile-dropdown" ref={ulRef}>
              <li>{user.username}</li>
              <li>{user.email}</li>
              <li><Link to="/manage-albums">my albums</Link></li>
              <li><Link to="/user/reviews">my reviews</Link></li>
              <li>
                <button
                  onClick={logout}
                  style={{ border: "none", backgroundColor: "transparent", height: "fit-content" }}
                >
                  log out
                </button>
              </li>
            </ul>
          )}
        </>
      ) : (
        <>
          <button style={{ border: "none", backgroundColor: "transparent" }}>
            <OpenModalMenuItem
              itemText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
          </button>
          <button style={{ border: "none", backgroundColor: "transparent" }}>
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
