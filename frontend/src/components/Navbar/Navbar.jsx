import React from "react";
import "./Navbar.css";
import {  FaSearch } from "react-icons/fa";
import { PiUserCircleDashedFill } from "react-icons/pi";
import { VscHeart } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleProfileClick = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("unauthorized");
      navigate("/profile");
    } catch (err) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };
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
        <a href="#" aria-label="Profil" onClick={handleProfileClick}>
          < PiUserCircleDashedFill className="icon" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
