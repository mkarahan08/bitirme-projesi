import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const {id, price, image, name, oldPrice } = product;

  const navigate = useNavigate();
  
  return (
    <div className="product-card"
    onClick={() => navigate("/product/"+ id)}
    >
      <div className="flex-row">
        <p>tarih( doldurulacak)</p>
        <p className="discount">🢃 %{product.discount}</p>
      </div>
      <img src={image} alt={name} className="product-img" />
      <div style={{height : '70px'}}>
      <h3 className="product-name">{name}</h3>
      </div>
      <p className="product-price">
        {price} TL{" "}
        <span className="old-price">{oldPrice} TL</span>
      </p>
      
   
    </div>
  );
}

export default ProductCard;
