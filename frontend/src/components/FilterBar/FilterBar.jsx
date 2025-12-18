import React, { useState, useRef, useEffect } from "react";
import Filter from "./Filter";
import "./FilterBar.css";

function FilterBar({ onApply, currentFilters, sort, onSortChange, priceRange, discountRange, genders, sites }) {
  const [openFilter, setOpenFilter] = useState(false);
  const filterRef = useRef(null);
  const [draft, setDraft] = useState(currentFilters || {});

  const toggleFilter = () => setOpenFilter((prev) => !prev);

  useEffect(() => {
    setDraft(currentFilters || {});
  }, [currentFilters]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setOpenFilter(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleApply = () => {
    if (onApply) {
      onApply(draft);
      setOpenFilter(false);
    }
  };

  const handleClear = () => {
    const cleared = {};
    setDraft(cleared);
    if (onApply) {
      onApply(cleared);
      setOpenFilter(false);
    }
  };

  const activeFilterCount = Object.values(draft).filter(v => {
    if (Array.isArray(v)) return v[0] !== v[1] && v[0] !== 0;
    return v && v !== '';
  }).length;

  return (
    <div className="filter-bar-container" ref={filterRef}>
      <div className="filter-bar">
        {/* Filtre Butonu */}
        <button
          className={`filter-button ${openFilter ? 'active' : ''}`}
          onClick={toggleFilter}
          type="button"
        >
          <span className="filter-icon">🔍</span>
          <span className="filter-text">Filtrele</span>
          {activeFilterCount > 0 && (
            <span className="filter-badge">{activeFilterCount}</span>
          )}
        </button>

        {/* Sıralama */}
        <div className="sort-section">
          <span className="sort-label">
            <span className="sort-icon">📊</span>
            <span>Sırala:</span>
          </span>
          <select 
            className="sort-select"
            value={sort || "recommended"} 
            onChange={(e) => onSortChange && onSortChange(e.target.value)}
          >
            <option value="recommended">Önerilenler</option>
            <option value="priceAsc">Fiyat: Düşükten Yükseğe</option>
            <option value="priceDesc">Fiyat: Yüksekten Düşüğe</option>
            <option value="discountDesc">En Çok İndirim</option>
          </select>
        </div>

        {/* Aktif Filtreler */}
        {activeFilterCount > 0 && (
          <button className="clear-filters" onClick={handleClear} type="button">
            <span>✕</span>
            <span>Temizle</span>
          </button>
        )}
      </div>

      {/* Filter Dropdown */}
      {openFilter && (
        <Filter
          value={draft}
          onChange={setDraft}
          onApply={handleApply}
          onClear={handleClear}
          priceRange={priceRange}
          discountRange={discountRange}
          genders={genders}
          sites={sites}
        />
      )}
    </div>
  );
}

export default FilterBar;
