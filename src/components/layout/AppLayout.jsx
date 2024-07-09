import React from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../footer/Footer";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
