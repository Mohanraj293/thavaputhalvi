import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = ({ title }) => {
  document.title = title;
  return (
    <div>
      <p>Go to <Link to="/">Home</Link> page</p>
    </div>
  );
};

export default PageNotFound;
