import React from "react";
import "./Filter.css";

function Filter({ value, onChange, onApply, onClear, priceRange, discountRange, genders = [], sites = [] }) {
  const local = value || { 
    gender: '', 
    site: '', 
    price: priceRange || [0, 0], 
    discount: discountRange || [0, 0] 
  };

  const setField = (key, val) => onChange && onChange({ ...local, [key]: val });

  const handlePriceChange = (e, index) => {
    const newPrice = [...(local.price || priceRange)];
    newPrice[index] = Number(e.target.value);
    setField('price', newPrice);
  };

  const handleDiscountChange = (e, index) => {
    const newDiscount = [...(local.discount || discountRange)];
    newDiscount[index] = Number(e.target.value);
    setField('discount', newDiscount);
  };

  return (
    <div className="filter-dropdown">
      <div className="filter-header">
        <h3 className="filter-title">
          <span className="filter-title-icon">🔍</span>
          <span>Filtre Seçenekleri</span>
        </h3>
        {onClear && (
          <button className="filter-close" onClick={onClear} type="button">
            ✕
          </button>
        )}
      </div>

      <div className="filter-content">
        {/* Cinsiyet */}
        <div className="filter-group">
          <label className="filter-group-label">
            <span className="label-icon">👥</span>
            <span>Cinsiyet</span>
          </label>
          <select 
            className="filter-select"
            value={local.gender || ''} 
            onChange={(e) => setField('gender', e.target.value)}
          >
            <option value="">Tümü</option>
            {genders.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        {/* Site */}
        <div className="filter-group">
          <label className="filter-group-label">
            <span className="label-icon">🏪</span>
            <span>Satıcı</span>
          </label>
          <select 
            className="filter-select"
            value={local.site || ''} 
            onChange={(e) => setField('site', e.target.value)}
          >
            <option value="">Tüm Satıcılar</option>
            {sites.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Fiyat Aralığı */}
        <div className="filter-group">
          <label className="filter-group-label">
            <span className="label-icon">💰</span>
            <span>Fiyat Aralığı (TL)</span>
          </label>
          <div className="range-inputs">
            <input
              type="number"
              className="range-input"
              placeholder="Min"
              value={local.price?.[0] || priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              min={priceRange[0]}
              max={priceRange[1]}
            />
            <span className="range-separator">-</span>
            <input
              type="number"
              className="range-input"
              placeholder="Max"
              value={local.price?.[1] || priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              min={priceRange[0]}
              max={priceRange[1]}
            />
          </div>
          <div className="range-display">
            <span>{local.price?.[0] || priceRange[0]} TL</span>
            <span>{local.price?.[1] || priceRange[1]} TL</span>
          </div>
        </div>

        {/* İndirim Oranı */}
        <div className="filter-group">
          <label className="filter-group-label">
            <span className="label-icon">🎯</span>
            <span>İndirim Oranı (%)</span>
          </label>
          <div className="range-inputs">
            <input
              type="number"
              className="range-input"
              placeholder="Min"
              value={local.discount?.[0] || 0}
              onChange={(e) => handleDiscountChange(e, 0)}
              min={0}
              max={100}
            />
            <span className="range-separator">-</span>
            <input
              type="number"
              className="range-input"
              placeholder="Max"
              value={local.discount?.[1] || 100}
              onChange={(e) => handleDiscountChange(e, 1)}
              min={0}
              max={100}
            />
          </div>
          <div className="range-display">
            <span>%{local.discount?.[0] || 0}</span>
            <span>%{local.discount?.[1] || 100}</span>
          </div>
        </div>
      </div>

      <div className="filter-actions">
        <button className="filter-apply-btn" onClick={onApply} type="button">
          <span>✓</span>
          <span>Filtrele</span>
        </button>
        {onClear && (
          <button className="filter-clear-btn" onClick={onClear} type="button">
            <span>✕</span>
            <span>Temizle</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Filter;
