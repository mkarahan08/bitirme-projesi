import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { FaUser, FaRegUser } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchProducts, clearSearch, fetchProducts, resetPagination } from "../../redux/slices/productSlice";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const favorites = useSelector((state) => state.favorites?.items || []);
  const favoritesCount = favorites.length;
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleProfileClick = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    navigate("/profile");
  };

  const handleFavoritesClick = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    navigate("/favorites");
  };

  // Sayfa değiştiğinde arama terimini temizle (eğer ana sayfada değilsek)
  useEffect(() => {
    if (location.pathname !== '/') {
      setSearchQuery("");
      dispatch(clearSearch());
    }
  }, [location.pathname, dispatch]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // 🔍 Sadece Enter veya buton tıklamasında arama yap
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    const trimmedQuery = searchQuery.trim();
    
    // Eğer arama terimi boşsa, tüm ürünleri göster
    if (trimmedQuery === '') {
      dispatch(clearSearch());
      dispatch(resetPagination());
      dispatch(fetchProducts(1));
      if (location.pathname !== '/') {
        navigate('/');
      }
      return;
    }

    // Minimum 2 karakter kontrolü
    if (trimmedQuery.length < 2) {
      return;
    }

    // Arama yap
    dispatch(resetPagination());
    dispatch(searchProducts({ query: trimmedQuery, page: 1 }));
    
    // Ana sayfaya yönlendir (eğer başka bir sayfadaysa)
    if (location.pathname !== '/') {
      navigate('/');
    }
  };
  return (
    <header className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo-link">
          <div className="logo-icon-wrapper">
            <span className="logo-icon">🤑</span>
          </div>
          <span className="logo-text">ŞakaGibiYa</span>
        </a>
      </div>

      <div className="navbar-center">
        <form className="search-area" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search"
            maxLength={50}
            placeholder="Aradığınız ürünü yazınız..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearchSubmit(e);
              }
            }}
          />
          <button className="search-btn" type="submit" aria-label="Ara">
            <FaSearch />
          </button>
        </form>
      </div>

      <div className="navbar-right">
        {/* Favoriler Butonu */}
        <button
          onClick={handleFavoritesClick}
          className="nav-action-button favorites-button"
          aria-label="Favoriler"
        >
          <div className="nav-icon-wrapper">
            {favoritesCount > 0 ? (
              <VscHeartFilled className="nav-icon heart-filled" />
            ) : (
              <VscHeart className="nav-icon heart-outline" />
            )}
            {favoritesCount > 0 && (
              <span className="nav-badge">{favoritesCount}</span>
            )}
          </div>
          <span className="nav-action-label">Favoriler</span>
        </button>

        {/* Kullanıcı Butonu */}
        <button
          onClick={handleProfileClick}
          className="nav-action-button user-button"
          aria-label={isAuthenticated ? "Profil" : "Giriş Yap"}
        >
          <div className="nav-icon-wrapper">
            {isAuthenticated ? (
              <FaUser className="nav-icon user-filled" />
            ) : (
              <FaRegUser className="nav-icon user-outline" />
            )}
          </div>
          <span className="nav-action-label">
            {isAuthenticated ? "Profil" : "Giriş"}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
