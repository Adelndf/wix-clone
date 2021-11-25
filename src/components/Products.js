import React from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
import { productsData } from "../data/poductsData";

function Products() {
  return (
    <div className="wrapper-all">
      <div className="products">
        <div className="products__content">
          <h2>Get Started with a Beautiful Template.</h2>
          <p>
            Pick from over 500 stunning mobile friendly templates for every kind
            of business.
          </p>
          <div className="products__wrapper">
            {productsData.map((data) => (
              <ProductItem image={data.img} />
            ))}
          </div>
          <div className="products__btn">See All Templates</div>
        </div>
      </div>
    </div>
  );
}

export default Products;
