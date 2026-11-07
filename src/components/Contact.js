import React from "react";
import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";

const Contact = ({ title }) => {
  document.title = title;

  const headingStyle = { color: "#D90166", fontWeight: "bold" };
  const textStyle = { color: "#00008B" };

  return (
    <div style={{ padding: "10px", marginTop: "88px" }}>
      <h1 style={{ textAlign: "center", color: "#D90166", fontWeight: "bold" }}>
        CONTACT US
      </h1>
      <MDBContainer className="mt-4">
        <MDBRow>
          <MDBCol md="6" className="mt-4">
            <h5 style={headingStyle}>
              <MDBIcon fas icon="location-arrow" /> ADDRESS FOR CORRESPONDENCE:
            </h5>
            <MDBContainer>
              <h6 style={textStyle}>NO.E/56, Watertank road</h6>
              <h6 style={textStyle}>Opp. BSNL Tele. Exchange</h6>
              <h6 style={textStyle}>
                Kesari Street, Nagercoil, Kanyakumari District
              </h6>
              <h6 style={textStyle}>TamilNadu, India - 629001</h6>
            </MDBContainer>
            <br />
            <h5 style={headingStyle}>
              <MDBIcon fas icon="envelope" /> EMAIL ID
            </h5>
            <MDBContainer>
              <h6 style={textStyle}>Forum : capeforumyoutrust@gmail.com</h6>
              <h6 style={textStyle}>Trust : ofbyandforyou@gmail.com</h6>
            </MDBContainer>
            <br />
            <h5 style={headingStyle}>
              <MDBIcon fas icon="phone" /> CONTACT:
            </h5>
            <MDBContainer>
              <h6 style={textStyle}>Mobile : 86103 11546</h6>
              <h6 style={textStyle}>WhatsApp : 95852 12775</h6>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="6">
            <div className="d-flex justify-content-center mb-4 mt-2">
              <iframe
                title="Office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2157156095545!2d77.42201881410064!3d8.18101160394669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0df586f9397%3A0x5f1c37da9aa6f9d0!2sTelecome%20Office!5e0!3m2!1sen!2sin!4v1597918697408!5m2!1sen!2sin"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0, maxWidth: "100%" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Contact;
