import React from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../footer/Footer";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="bg-#FFFFFF p-10">{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
