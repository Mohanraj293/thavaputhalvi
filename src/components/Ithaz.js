import React from "react";

const Book = ({ title, year, pdfUrl, index }) => {
  const handleOpenPDF = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <tr onClick={handleOpenPDF}>
      <td>{index}</td>
      <td>{title}</td>
      <td>{year}</td>
    </tr>
  );
};

export default Book;
