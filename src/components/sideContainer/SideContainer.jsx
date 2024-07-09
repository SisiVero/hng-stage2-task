import React from "react";

export default function SideContainer() {
  return (
    <div className="side-container h-max rounded-lg px-4">
      <h1 className=" text-left my-4 font-bold">CATEGORIES</h1>
      <div className="categories flex text-sm mb-2">
        <p>Home /</p>
        <p className="women pl-1">Women /</p>
        <p className="pl-1">Men</p>
      </div>
      <div className="first-side text-sm  m-8 border h-max border-yellow-500">
        <div className="search m-4 h-9 rounded-lg p-1">
          <input
            type="search"
            placeholder="Search items"
            className=" outline-none border-none"
          />
        </div>
        <div className="items">
          <p>Clothing</p>
          <p>+</p>
        </div>
        <div className="items">
          <p>Bags</p>
          <p>+</p>
        </div>
        <div className="items">
          <p>Accessories</p>
          <p>+</p>
        </div>
        <div className="items">
          <p>Headwears</p>
          <p>+</p>
        </div>
      </div>
      <div className="second-side">
        <p>Filter By: SIZE</p>
        <p>Small</p>
        <p>Medium</p>
        <p>Large</p>
      </div>
      <div className="third-side">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
