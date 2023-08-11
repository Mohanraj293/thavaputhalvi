import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import "../css/Ithazgal.css";
import Ithaz from "./Ithaz";
import AprilPdf from "../assets/ithazgal-pdf/APRIL-JUNE-ISSUE-2023.pdf";
import JanMarchPdf from "../assets/ithazgal-pdf/JAN-MARCH ISSUE-2023.pdf";
import JanMarchImage from "../assets/ithazgal-pdf/JAN-MARCH-2023.jpg";
import AprilImage from "../assets/ithazgal-pdf/APRIL-JUNE-2023.jpg";

const Ithazgal = ({ title }) => {
  document.title = title;

  const books = [
    {
      title: "JAN MARCH ISSUE 2023",
      year: 2023,
      pdfUrl: JanMarchPdf,
      label: JanMarchImage,
    },
    {
      title: "APRIL JUNE ISSUE 2023",
      year: 2023,
      pdfUrl: AprilPdf,
      label: AprilImage,
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <h1 style={{ textAlign: "center" }}>இதழ்கள்</h1>
      <div>
        {books.map((book) => (
          <Ithaz
            image={book.label}
            title={book.title}
            year={book.year}
            pdfUrl={book.pdfUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Ithazgal;
