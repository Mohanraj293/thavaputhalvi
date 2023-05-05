import React, { useState } from "react";
import "../css/Navbar.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function App() {
  const [showNavCentred, setShowNavCentred] = useState(false);

  return (
    <MDBNavbar expand="lg" dark className="MDBNavbar">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/"><strong>தவப்புதல்வி</strong></MDBNavbarBrand>
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
            <MDBNavbarLink active aria-current="page" href="/" className="pe-3">
              முகப்பு
            </MDBNavbarLink>
            <MDBNavbarLink active href="/நிர்வாகம்" className="pe-3">
              நிர்வாகம்
            </MDBNavbarLink>
            <MDBNavbarLink active href="/ஆசிரியர்-குழு" className="pe-3">
              ஆசிரியர் குழு
            </MDBNavbarLink>
            <MDBNavbarLink active href="/இதழ்கள்" className="pe-3">
              இதழ்கள்
            </MDBNavbarLink>
            <MDBNavbarLink active href="/நிகழ்வுகள்" className="pe-3">
              நிகழ்வுகள்
            </MDBNavbarLink>
            <MDBNavbarLink active href="/தொடர்பு-கொள்ள" className="pe-3">
              தொடர்பு கொள்ள
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
