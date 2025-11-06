import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/dummyProduct";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="not-found">Ürün bulunamadı.</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>

          <div className="price-box">
            <span className="price">{product.price} TL</span>
            <span className="old-price">{product.oldPrice} TL</span>
            <span className="discount">-%{product.discount}</span>
          </div>

          <p className="category">Kategori: {product.category}</p>
          <p className="site">Satış Sitesi: {product.site}</p>

          <p className="description">
            Bu ürün, yüksek kalite ve modern tasarımıyla dikkat çeker. Uzun ömürlü
            kullanım ve şık bir görünüm sunar.
          </p>

          <button className="add-to-cart"> ♥ Favorilere Ekle</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
