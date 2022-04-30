import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [localStorageLength, setLocalstorageLength] = useState(0);
  const [loginStatus, setLoginstatus] = useState(false);
  const cartStyle = { color: "white", fontSize: "1.5em" };
  const state = useSelector((state) => state.handleCart);
  console.log(state.length);

  useEffect(() => {
    setLocalstorageLength(localStorage.length);
    setLoginstatus(localStorage.getItem("logInStatus"));
  });

  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload(false);
    localStorage.setItem("IsLogin", false);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="nav-link navbar-brand my-auto" to="/">
        Grocery
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <div className="ecom-links">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </div>
          <div className="user-links">
            {!loginStatus ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            ) : null}

            {localStorageLength >= 0 && !loginStatus ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            ) : null}

            { loginStatus ? (
              <li className="nav-item">
                <NavLink onClick={logoutHandler} className="nav-link" to="/">
                  Logout
                  {/* {localStorage.getItem()} */}
                </NavLink>
              </li>
            ) : null}
          </div>
          <div className="cart-icon">
            <li className="nav-item  my-auto mx-auto">
              <NavLink to="/cart">
                <AiOutlineShoppingCart style={cartStyle} />
                {state.length}
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
