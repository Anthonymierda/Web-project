//The useEffect Hook allows you to perform side effects in your components.
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import "./Navbar.css";

function Navbar() {
  // What's going to update our state and change it.
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);

  // It sets the click value to the opposite value. it reverses it.
  const handleClick = () => setClick(!click);
  // To close the mobile menu
  const closeMobileMenu = () => setClick(false);

  //If the window size becomes less than 960, we want to hide the button
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //Because the button was re-apppearing after refreshing and re-sizing the window screen:
  useEffect(() => {
    showButton();
  }, []);

  //When i resize the screen i want to call the showButton function
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenu}
            style={{ color: "white", textDecoration: "none" }}
          >
            RoamRush
            <i className="fab fa-typo3" />
          </Link>

          {/*On click reverse the state of the existing state */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? " fas fa-times" : "fas fa-bars"} />
          </div>

          {/*I want the nav menu to dissapear whenever i click on an
          item inside of the side bar*/}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>


            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                style={{ color: "white", textDecoration: "none" }}
                onClick={closeMobileMenu}>
                Hotel rooms
              </Link>


            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                style={{ color: "white", textDecoration: "none" }}
                onClick={closeMobileMenu}>
                  Luxury Resorts
               
              </Link>


            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                style={{ color: "white", textDecoration: "none" }}
                onClick={closeMobileMenu}>
                SIGN UP
              </Link>
            </li>
          </ul>


        </div>
      </nav>
    </>
  );
}
export default Navbar;
