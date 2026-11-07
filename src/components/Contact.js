import React from "react";

const Contact = ({ title }) => {
  document.title = title;
  return (
    <div style={{ padding: "10px", marginTop: "88px" }}>
      <h1 style={{ textAlign: "center", color: "#D90166", fontWeight: "bold" }}>
        Contact
      </h1>
    </div>
  );
};

export default Contact;
