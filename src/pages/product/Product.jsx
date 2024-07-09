import React from "react";

export default function ProductPage() {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>Sandals with back bow</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos quod
          explicabo provident expedita aut deserunt, fugit earum incidunt nulla
          impedit adipisci. Ratione ea in expedita fuga ullam, molestiae
          accusamus?
        </p>
        <div className="stars-div">
          <img src="" alt="" />
          <p>(91)</p>
        </div>
        <p>Choose a Color</p>
        <div className="color-cont">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Select Size</p>
        <div className="size-cont">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <p>Shoe Quantity</p>
        <p>
          {" "}
          <span>-</span> 2 <span>+</span>
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
