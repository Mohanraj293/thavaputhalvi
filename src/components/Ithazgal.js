import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import Ithaz from "./Ithaz";
import AprilPdf from '../assets/ithazgal-pdf/APRIL-JUNE-ISSUE-2023.pdf'

const Ithazgal = ({ title }) => {
  document.title = title;

  const books = [
    {
      title: "Book 1",
      label: "Author 1",
      year: 2020,
      pdfUrl: AprilPdf,
    },
  ];

  return (
    <div style={{ margin: "100px" }}>
      <MDBTable striped responsive>
        <MDBTableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Book Name</th>
            <th scope="col">Published Year</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {books.map((book, index) => (
            <Ithaz
              index={index}
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
