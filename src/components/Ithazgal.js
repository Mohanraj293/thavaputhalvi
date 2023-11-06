import React from "react";
import Ithaz from "./Ithaz";
import JanMarchImage from "../assets/ithalgal-wrapper/jan-mar.jpeg";
import AprilImage from "../assets/ithalgal-wrapper/april-une.jpeg";
import JulyImg from "../assets/ithalgal-wrapper/jul-sep.jpeg";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

const Ithazgal = ({ title }) => {
  document.title = title;

  const books = [
    {
      title: "JAN-MARCH-ISSUE-2023",
      year: 2023,
      pdfUrl: "https://online.fliphtml5.com/cetih/dlfl/#p=12",
      label: JanMarchImage,
    },
    {
      title: "APRIL-JUNE-ISSUE-2023",
      year: 2023,
      pdfUrl: "https://online.fliphtml5.com/cetih/gveo/",
      label: AprilImage,
    },
    {
      title: "JULY-SEPTEMBER-2023",
      year: 2023,
      pdfUrl: "https://online.fliphtml5.com/cetih/lzlo/",
      label: JulyImg,
    }
  ];

  return (
    <div style={{ padding: "10px", marginTop: "88px" }}>
      <h1 style={{ textAlign: "center", color: "#D90166", fontWeight: "bold" }}>
        இதழ்கள்
      </h1>
      <MDBRow style={{ maxWidth: "1000px", margin: "auto" }}>
        {books.map((book, i) => (
          <MDBCol key={i}>
            <Ithaz image={book.label} title={book.title} pdfUrl={book.pdfUrl} />
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
};

export default Ithazgal;
