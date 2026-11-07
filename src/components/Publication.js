import React from "react";

const Publication = ({ title }) => {
  document.title = title;
  return (
    <div style={{ padding: "10px", marginTop: "88px" }}>
      <h1 style={{ textAlign: "center", color: "#D90166", fontWeight: "bold" }}>
        Publication
      </h1>
    </div>
  );
};

export default Publication;
