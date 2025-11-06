import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CategoryBar from '../../components/CategoryBar/CategoryBar'
import { products } from "../../data/dummyProduct";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";
import FilterBar from '../../components/FilterBar/FilterBar';

function Home() {
  return (
    <div>
      
      <div className='homeComponent'>
        <FilterBar/>
        <div className="product-list">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Home
