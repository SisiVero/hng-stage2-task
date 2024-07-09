import React from "react";
import AppLayout from "../../components/layout/AppLayout";

export default function Cart() {
  return (
    <AppLayout>
      <div className="cart-cont">
        <div>
          <p>
            My Cart <span>3</span>
          </p>
          X
        </div>
        <div>
          <img src="" alt="" />
          <div className="product-details">
            <p>Big Tree Shoe</p>
            <p>
              <span>$</span> 55.00
            </p>
            <p>
              Size: 6 <span>Colour:Pink</span>
            </p>
            <p>Big Tree Shoe</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
