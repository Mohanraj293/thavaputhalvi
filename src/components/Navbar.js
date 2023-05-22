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

function Navbar() {
  const [showNavCentred, setShowNavCentred] = useState(false);
  const navBarStyleContainer = {
    backgroundColor: "#000080",
    color: "white",
  };

  const navBarStyle = { paddingTop: "15px", paddingBottom: "15px" };
  return (
    <MDBNavbar expand="lg" dark className="navbar" style={navBarStyle}>
      <MDBContainer fluid>
        <NavLink to="/" style={navBarStyleContainer} className="brand">
          <strong>தவப்புதல்வி</strong>
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
            <NavLink to="/ஆசிரியர்-குழு" className="pe-3">
              ஆசிரியர் குழு
            </NavLink>
            <NavLink to="/இதழ்கள்" className="pe-3">
              இதழ்கள்
            </NavLink>
            <NavLink to="/நிகழ்வுகள்" className="pe-3">
              நிகழ்வுகள்
            </NavLink>
            <NavLink to="/தொடர்பு-கொள்ள" className="pe-3">
              தொடர்பு கொள்ள
            </NavLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
