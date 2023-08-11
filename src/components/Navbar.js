import React, { useState } from "react";
import "../css/Navbar.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import banner from "../assets/home-images/THAVAPPUTHALVI-TEXT.png";
import logo from "../assets/home-images/THAVAPUTHALVI  LOGO.png";

function Navbar() {
  const [showNavCentred, setShowNavCentred] = useState(false);
  const navBarStyleContainer = {
    backgroundColor: "#c2258d",
    color: "white",
  };

  const navBarStyle = { paddingTop: "15px", paddingBottom: "15px", backgroundColor: "#c2258d" };
  return (
    <MDBNavbar expand="lg" dark className="navbar" style={navBarStyle}>
      <MDBContainer fluid>
        <NavLink to="/" style={navBarStyleContainer} className="brand">
          <a href="/">
            <img
              style={{ padding: "5px" }}
              src={logo}
              height="40"
              width="40"
              alt="logo"
            />
            <img
              style={{ padding: "5px" }}
              src={banner}
              height="40"
              width="110"
              alt="banner"
            />
          </a>
        </NavLink>

        <MDBNavbarToggler
          type="button"
          data-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavCentred(!showNavCentred)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse
          navbar
          show={showNavCentred}
          id="navbarCenteredExample"
          className="justify-content-center"
        >
          <MDBNavbarNav fullWidth={false} className="mb-2 mb-lg-0">
            <NavLink to="/" className="pe-3">
              முகப்பு
            </NavLink>
            <NavLink to="/நிர்வாகம்" className="pe-3">
              நிர்வாகம்
            </NavLink>
            <NavLink to="/நிறுவனர்" className="pe-3">
              நிறுவனர்
            </NavLink>
            <NavLink to="/ஆசிரியர்-குழு" className="pe-3">
              ஆசிரியர் குழு
            </NavLink>
            <NavLink to="/பெண்கள்அமைப்பு" className="pe-3">
              பெண்கள்அமைப்பு
            </NavLink>
            <NavLink to="/இதழ்கள்" className="pe-3">
              இதழ்கள்
            </NavLink>
            <NavLink to="/நிகழ்வுகள்" className="pe-3">
              நிகழ்வுகள்
            </NavLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
