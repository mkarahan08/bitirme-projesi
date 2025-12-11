// src/api/products.js
export async function fetchProducts(params = {}) {
    var qs = new URLSearchParams(params).toString();
    var res = await fetch('http://localhost:5000/api/products' + (qs ? ('?' + qs) : ''));
    if (!res.ok) throw new Error('Ürünler alınamadı');
    return await res.json();
  }
  
  export async function fetchProduct(id) {
    var res = await fetch('http://localhost:5000/api/products/' + id);
    if (!res.ok) throw new Error('Ürün alınamadı');
    return await res.json();
  }