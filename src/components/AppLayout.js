import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout() {
  const appStyle = {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    justifyContent: "flex-start",
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
