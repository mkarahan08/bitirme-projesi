import React from "react";
import "./Navbar.css";
import {  FaSearch } from "react-icons/fa";
import { PiUserCircleDashedFill } from "react-icons/pi";
import { VscHeart } from "react-icons/vsc";

function Navbar() {
  return (
    <header className="navbar">
      
      <div className="navbar-left">
        <a href="/" className="logo">İNDİRİMSEPETİ</a>
      </div>

      
      <div className="navbar-center">
        <div className="search-area">
          <input
            type="text"
            className="search"
            maxLength={50}
            placeholder="Aradığınız ürünü yazınız..."
          />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
      </div>

      
      <div className="navbar-right">
        <VscHeart className="icon" />
        < PiUserCircleDashedFill className="icon" />
      </div>
    </header>
  );
}

export default Navbar;
