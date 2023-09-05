import React from "react";
import "../css/Ithaz.css";

const Book = ({ title, pdfUrl, image }) => {
  const handleOpenPDF = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <div className="ithaz">
        <img className="image" src={image} alt="" width={250} height={300} />
      </div>
      <div>
        <p
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            textAlign: "center",
            fontSize:"18px"
          }}
          onClick={handleOpenPDF}
        >
          {title}
        </p>
      </div>
    </>
  );
};

export default Book;
