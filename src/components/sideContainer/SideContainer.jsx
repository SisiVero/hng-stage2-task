import React from "react";
import { PlusSign, Search } from "../svg";

export default function SideContainer() {
  const colorCodes = [
    { id: 1, color: "#FF95AE" },
    { id: 2, color: "#D31E27" },
    { id: 3, color: "#FCA513" },
    { id: 4, color: "#018967" },
    { id: 5, color: "#F56630" },
    { id: 6, color: "#EDD1D6" },
    { id: 7, color: "#1877F2" },
    { id: 8, color: "#FFD964" },
    { id: 9, color: "#C82E96" },
    { id: 10, color: "#5B0B10" },
    { id: 10, color: "#43EA5E" },
    { id: 10, color: "#000000" },
    { id: 10, color: "#895B01" },
    { id: 10, color: "#D7393B" },
    { id: 10, color: "#6FA3E6" },
    { id: 10, color: "#018967" },
    { id: 10, color: "#018967" },
    { id: 10, color: "#018967" },
    { id: 10, color: "#018967" },
    { id: 10, color: "#018967" },
  ];

  return (
    <div className="side-container min-h-lvh w-[315px] rounded-lg pl-4 pr-[18px] py-4">
      <h1 className=" text-left font-bold pl-4">CATEGORIES</h1>
      <div className="categories flex text-sm my-6 font-medium">
        <p>Home /</p>
        <p className="women pl-1">Women /</p>
        <p className="pl-1">Men</p>
      </div>
      <div className="first-side text-sm h-max p-3 ">
        <div className=" relative search h-9 rounded-lg py-[8px] px-[16px] mb-6">
          <span className="absolute left-1">
            <Search />
          </span>
          <input
            type="search"
            placeholder="Search items"
            className=" outline-none border-none pl-6 pr-3"
          />
        </div>
        <div className="items !mb-0">
          <p>Clothing</p>
          <p>
            <PlusSign />
          </p>
        </div>
        <div className="items !mb-0">
          <p>Bags</p>
          <p>
            <PlusSign />
          </p>
        </div>
        <div className="items !mb-0">
          <p>Accessories</p>
          <p>
            <PlusSign />
          </p>
        </div>
        <div className="items !mb-0">
          <p>Headwears</p>
          <p>
            <PlusSign />
          </p>
        </div>
      </div>
      <div className="second-side bg-white p-3 my-5">
        <p className="color-#000">
          Filter By: <span className="font-bold ">SIZE</span>
        </p>
        <div className="items !mb-0">
          <p>Small</p>
        </div>
        <div className="items !mb-0">
          <p>Medium</p>
        </div>
        <div className="items !mb-0">
          <p>Large</p>
        </div>
      </div>
      <div className="third-side bg-white p-3">
        <p className="color-#000 mb-4">
          Filter By: <span className="font-bold ">COLOUR</span>
        </p>
        <div className="grid gap-4 items-start grid-cols-4 pr-8">
          {colorCodes.map((color) => (
            <div
              key={color.id}
              style={{ backgroundColor: color.color }}
              className="rounded-full w-[30px] h-[30px]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
