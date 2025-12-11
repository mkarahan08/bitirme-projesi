import React, { useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import Filter from "./Filter";
import "./FilterBar.css";

function FilterBar({ onApply, currentFilters, sort, onSortChange, priceRange, discountRange, categories, sites }) {
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

  return (
    <div className="container" ref={filterRef}>
      <Button
        onClick={toggleFilter}
        variant="outlined"
        startIcon={<FilterListIcon />}
        sx={{
          textTransform: "none",
          borderRadius: "10px",
          border: "none",
          fontSize: "1rem",
          padding: "12px 32px",
          color: "#111827",
          "&:hover": {
            backgroundColor: "#f3f4f6",
            transform: "scale(1.05)",
            transition: "0.2s ease-in-out",
          },
        }}
      >
        Filtrele
      </Button>

      <div className="sort-menu">
        <label>Sırala: </label>
        <select value={sort} onChange={(e) => onSortChange && onSortChange(e.target.value)}>
          <option value="recommended">Önerilenler</option>
          <option value="priceAsc">Artan Fiyat</option>
          <option value="priceDesc">Azalan Fiyat</option>
        </select>
      </div>

      
      {openFilter && (
        <Filter
          value={draft}
          onChange={setDraft}
          onApply={() => { onApply && onApply(draft); setOpenFilter(false); }}
          priceRange={priceRange}
          discountRange={discountRange}
          categories={categories}
          sites={sites}
        />
      )}
    </div>
  );
}

export default FilterBar;
