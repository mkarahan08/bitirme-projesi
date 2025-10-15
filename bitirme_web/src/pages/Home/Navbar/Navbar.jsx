import React from "react";
import "./Navbar.css";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      {/* Sol Kısım - Logo */}
      <div className="navbar-left">
        <a href="/" className="logo">İNDİRİMSEPETİ</a>
      </div>

      {/* Orta Kısım - Arama Alanı */}
      <div className="navbar-center">
        <div className="search-area">
          <input
            type="text"
            className="search"
            placeholder="Aradığınız ürünü yazınız..."
          />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Sağ Kısım - İkonlar */}
      <div className="navbar-right">
        <FaHeart className="icon" />
        <FaUser className="icon" />
      </div>
    </header>
  );
}

export default Navbar;
