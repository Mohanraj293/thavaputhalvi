import React from "react";
import "../css/Ithaz.css";

const Book = ({ title, year, pdfUrl, image }) => {
  const handleOpenPDF = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="ithaz">
      <img className="image" src={image} alt="" width={150} height={200} />
      <p
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={handleOpenPDF}
      >
        {title}
      </p>
    </div>
  );
};

export default Book;
