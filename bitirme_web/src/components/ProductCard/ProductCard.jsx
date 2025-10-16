import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">
        {product.price} TL{" "}
        <span className="old-price">{product.oldPrice} TL</span>
      </p>
      <p className="discount">-%{product.discount}</p>
      <a
        href={product.site}
        className="product-link"
        target="_blank"
        rel="noreferrer"
      >
        Siteye Git
      </a>
    </div>
  );
}

export default ProductCard;
