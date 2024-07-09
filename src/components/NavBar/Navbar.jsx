import React from "react";
import facebook from "../../images/Facebook.png";
import tiktok from "../../images/Tik Tok.png";
import instagram from "../../images/Instagram.png";

export default function Navbar() {
  return (
    <div className="main-container text-xs text-white h-12 max-w-full flex items-center px-16 justify-between fixed inset-0">
      <nav className="list-items flex list-none ">
        <ul className="ul-list flex gap-5 ">
          <li>Home</li>
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="text-cont flex items-center">
        <p>
          Get 50% Off on Selected Items{" "}
          <span className="text-white px-1">|</span>
        </p>
        <p className="subtext">Shop Now</p>
      </div>
      <div className="logos-cont flex gap-4">
        <img src={facebook} alt="facebook" className="nav-logo" />
        <img src={tiktok} alt="tiktok" className="nav-logo" />
        <img src={instagram} alt="instagram" className="nav-logo" />
      </div>
    </div>
  );
}
