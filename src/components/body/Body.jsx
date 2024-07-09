import React from "react";
import SideContainer from "../sideContainer/SideContainer";
import heroImage from "../../images/Desktop-hero-img.png";
import { DropDownArrow } from "../svg";

export default function Body() {
  return (
    <div className="main-body mt-12 flex gap-9 justify-center">
      <SideContainer />
      <section>
        <img src={heroImage} alt="" className="w-full h-[377px]" />
        <div className="flex justify-between items-center mt-5 mb-3">
          <p className="font-bold color-#000">PRODUCTS</p>
          <p className="text-[16px] font-normal">
            Sort by:{" "}
            <span className="!text-[14px] !text-[#808000] font-semibold">
              Most popular
            </span>
            <DropDownArrow />
          </p>
        </div>
        <div className="products-list">
          <div></div>
        </div>
      </section>
    </div>
  );
}
