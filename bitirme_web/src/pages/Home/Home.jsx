import React from 'react'
import Navbar from './Navbar/Navbar'
import CategoryBar from './CategoryBar/CategoryBar'
import { products } from "../../data/dummyProduct";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar/>
      <CategoryBar/>
      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default Home
