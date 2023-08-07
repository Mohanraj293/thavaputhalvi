import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import Ithaz from "./Ithaz";
import AprilPdf from "../assets/ithazgal-pdf/APRIL-JUNE-ISSUE-2023.pdf";

const Ithazgal = ({ title }) => {
  document.title = title;

  const books = [
    {
      title: "APRIL-JUNE-ISSUE-2023",
      label: "Author 1",
      year: 2020,
      pdfUrl: AprilPdf,
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <h1 style={{ textAlign: "center" }}>இதழ்கள்</h1>
      <MDBTable bordered responsive>
        <MDBTableHead light>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Book Name</th>
            <th scope="col">Published Year</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {books.map((book, index) => (
            <Ithaz
              index={index + 1}
              title={book.title}
              year={book.year}
              pdfUrl={book.pdfUrl}
            />
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default Ithazgal;
