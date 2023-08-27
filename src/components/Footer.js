import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function App() {
  const footerStyle = {
    backgroundColor: "#ff2e99",
    color: "white",
    marginTop: "auto",
  };
  return (
    <MDBFooter className=" text-center text-white" style={footerStyle}>
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-2"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/subathra.chelladurai"
            target="_blank"
            role="button"
          >
            <MDBIcon size="lg" fab icon="facebook-f" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-2"
            style={{ backgroundColor: "#25d366" }}
            href="https://wa.me/+919585212775"
            target="_blank"
            role="button"
          >
            <MDBIcon size="lg" fab icon="whatsapp" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-2"
            style={{ backgroundColor: "#c00" }}
            href="https://www.youtube.com/drsubathrachelladurai"
            target="_blank"
            role="button"
          >
            <MDBIcon size="lg" fab icon="youtube" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Copyright
        <a className="text-white" href="https://subathrachelladurai.in/">
          : Subathra Chelladurai
        </a>
      </div>
    </MDBFooter>
  );
}
