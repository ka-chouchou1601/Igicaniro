import React, { Fragment, useState } from "react";
import {
  Nav,
 Container,
} from "./NavbarStyles";


import Image from "../Image/Image";
const NavBar = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavBarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavBarColor);
  return (
    <Fragment>
      <Image />
      <Container>
        <nav className={colorChange ? "navbar colorChange" : "navbar"}>
          <div className="navContainer">
            <a className="navLogo" href="#">
              I.G.I.C.A.N.I.R.O
            </a>
            <div className="navMenu">
              <li className="navItem">
                <a className="navLinks">Products</a>
              </li>
              <li className="navItem">
                <a className="navLinks">About us </a>
              </li>
              <li className="navItem">
                <a className="navLinks">Blog</a>
              </li>
              <li className="navItem">
                <a className="navLinks">Contact us </a>
              </li>
            </div>
          </div>
        </nav>
      </Container>
    </Fragment>
  );
};

export default NavBar;
