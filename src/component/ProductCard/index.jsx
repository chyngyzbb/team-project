import React from "react";
import './ProductCard.scss'

const ProductCard = ({ el, idx }) => {
  return (
    <div className="carts">
      <div className="cart" key={idx}>
        <img className="img-cart" src={el.url} alt="" />
        <h1>{el.name}</h1>
      </div>
    </div>
  );
};

export default ProductCard;
