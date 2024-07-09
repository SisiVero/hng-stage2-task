import React from "react";
import SideContainer from "../sideContainer/SideContainer";

export default function Body() {
  return (
    <div className="main-body mt-12 flex justify-between border border-red-500 ">
      <SideContainer />
      <div className="products-cont">
        <div>
          <p>WOMEN</p>
          <p>
            Sort by: <span>Most Popular </span>
          </p>
        </div>
        <div className="hero-image"></div>
        <section>
          <div>
            <p>PRODUCTS</p>
            <p>Sort by: Most popular</p>
          </div>
          <div className="products-list">
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
}
