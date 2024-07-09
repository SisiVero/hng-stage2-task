import React, { useEffect, useState } from "react";
import facebook from "../../images/Facebook.png";
import tiktok from "../../images/Tik Tok.png";
import instagram from "../../images/Instagram.png";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("home")) {
      setActive("home");
    } else if (location.pathname.includes("product-page")) {
      setActive("product-page");
    } else if (location.pathname.includes("cart")) {
      setActive("cart");
    } else if (location.pathname.includes("checkout")) {
      setActive("checkout");
    }
  }, []);
  return (
    <div className="main-container text-xs text-white h-12 max-w-full flex items-center px-16 justify-between fixed inset-0 z-50">
      <nav className="list-items flex list-none ">
        <ul className="ul-list flex gap-5 ">
          <li>
            <NavLink
              to={"/"}
              className={`nav-link ${active === "/" ? "active" : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/product-page"}
              className={`nav-link ${
                active === "/product-page" ? "active" : ""
              }`}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/cart"}
              className={`nav-link ${active === "/cart" ? "active" : ""}`}
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/checkout"}
              className={`nav-link ${active === "/checkout" ? "active" : ""}`}
            >
              Checkout
            </NavLink>
          </li>
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
