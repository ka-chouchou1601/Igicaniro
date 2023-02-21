import React, { Fragment, useState } from "react";
import {

 Container,
} from "./NavbarStyles";


import Image from "../Image/Image";
const NavBar = () => {
  const [colorChange, setColorChange] = useState(false);

  const changeNavBarColor = () => {
    if (window.scrollY >= 90) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavBarColor);

  const [linkColorChange, setLinkColorChange] = useState(false);
  const changeNavLinkColor = ()=>{
    if (window.scrollY >=90){
      setLinkColorChange(true);
    }else{
      setLinkColorChange(false);
    }
    }
   window.addEventListener("scroll", changeNavLinkColor)
  return (
    <Fragment>
      <Image />
      <Container>
        <nav className={colorChange ? "navbar colorChange" : "navbar"}>
          <div className="navContainer">
            <a
              className={
                linkColorChange ? "navLogo linkColorChange" : "navLogo"
              }
              href="#"
            >
              I.G.I.C.A.N.I.R.O
            </a>
            <div className="navMenu">
              <li className="navItem">
                <a
                  className={
                    linkColorChange ? "navLinks linkColorChange" : "navLinks"
                  }
                >
                  Products{" "}
                </a>
              </li>
              <li className="navItem">
                <a
                  className={
                    linkColorChange ? "navLinks linkColorChange" : "navLinks"
                  }
                >
                  About us{" "}
                </a>
              </li>
              <li className="navItem">
                <a
                  className={
                    linkColorChange ? "navLinks linkColorChange" : "navLinks"
                  }
                >
                  Blog
                </a>
              </li>
              <li className="navItem">
                <a
                  className={
                    linkColorChange ? "navLinks linkColorChange" : "navLinks"
                  }
                >
                  Contact us{" "}
                </a>
              </li>
            </div>
          </div>
        </nav>
      </Container>
    </Fragment>
  );
};

export default NavBar;
