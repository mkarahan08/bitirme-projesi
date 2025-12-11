import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CategoryBar from '../../components/CategoryBar/CategoryBar'
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";
import FilterBar from '../../components/FilterBar/FilterBar';
import { fetchProducts } from '../../api/product';

function Home() {
  const [allProducts, setAllProducts] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);
  const [sort, setSort] = React.useState('recommended');
  const [filters, setFilters] = React.useState({
    category: '',
    site: '',
    price: [0, 0],
    discount: [0, 0],
  });

  const priceMin = React.useMemo(() => allProducts.length ? Math.min(...allProducts.map(p => p.price)) : 0, [allProducts]);
  const priceMax = React.useMemo(() => allProducts.length ? Math.max(...allProducts.map(p => p.price)) : 0, [allProducts]);
  const discountMin = 0;
  const discountMax = React.useMemo(() => allProducts.length ? Math.max(...allProducts.map(p => p.discount || 0)) : 0, [allProducts]);
  const categories = React.useMemo(() => Array.from(new Set(allProducts.map(p => p.category))).filter(Boolean), [allProducts]);
  const sites = React.useMemo(() => Array.from(new Set(allProducts.map(p => p.site))).filter(Boolean), [allProducts]);

  React.useEffect(function() {
    fetchProducts({ page: 1, limit: 24, sort: '-createdAt' })
      .then(function(data){
        var mapped = (data.items || []).map(function(p){
          return {
            id: p._id,
            name: p.title,
            price: p.price,
            oldPrice: p.oldPrice,
            discount: p.discount,
            category: p.subCategory || p.rootCategory || '',
            site: p.site || '',
            image: p.image,
            createdAt: p.createdAt
          };
        });
        setAllProducts(mapped);
        setFiltered(mapped);
      })
      .catch(function(err){
        console.error('Ürünler alınamadı:', err);
      });
  }, []);

  React.useEffect(() => {
    if (!allProducts.length) return;
    setFilters(prev => ({
      ...prev,
      price: [priceMin, priceMax],
      discount: [discountMin, discountMax],
    }));
  }, [allProducts.length, priceMin, priceMax, discountMax]);

  React.useEffect(() => {
    let result = [...allProducts];

    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }
    if (filters.site) {
      result = result.filter(p => p.site === filters.site);
    }
    const [minP, maxP] = filters.price || [priceMin, priceMax];
    result = result.filter(p => p.price >= minP && p.price <= maxP);
    const [minD, maxD] = filters.discount || [discountMin, discountMax];
    result = result.filter(p => (p.discount || 0) >= minD && (p.discount || 0) <= maxD);

    if (sort === 'priceAsc') result.sort((a, b) => a.price - b.price);
    if (sort === 'priceDesc') result.sort((a, b) => b.price - a.price);

    setFiltered(result);
  }, [allProducts, filters, sort, priceMin, priceMax, discountMax]);

  const handleApplyFilters = (f) => setFilters(f);
  const handleSortChange = (value) => setSort(value);

  return (
    <div>
      
      <div className='homeComponent'>
        <FilterBar
          onApply={handleApplyFilters}
          currentFilters={filters}
          sort={sort}
          onSortChange={handleSortChange}
          priceRange={[priceMin, priceMax]}
          discountRange={[discountMin, discountMax]}
          categories={categories}
          sites={sites}
        />
        <div className="product-list">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Home
