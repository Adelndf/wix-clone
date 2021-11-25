import React from "react";
import "./ProductItem.css";

function ProductItem({ image }) {
  return (
    <div className="productItem">
      <div className="overlay">
        <div className="overlay__txt">See More</div>
      </div>
      <div className="browser">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default ProductItem;
