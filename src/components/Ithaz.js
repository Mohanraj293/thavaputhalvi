import React from "react";
import "../css/Ithaz.css";

const Book = ({ title, pdfUrl, image }) => {
  const handleOpenPDF = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <div className="ithaz">
        <img
          style={{ cursor: "pointer" }}
          onClick={handleOpenPDF}
          className="image"
          src={image}
          alt=""
          width={250}
          height={300}
        />
      </div>
      <div>
        <p
          style={{
            textDecoration: "underline",
            textAlign: "center",
            fontSize: "18px",
            color: "#00008B",
            cursor: "pointer",
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
