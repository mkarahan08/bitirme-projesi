import React, { useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import Filter from "./Filter";
import "./FilterBar.css";

function FilterBar() {
  const [openFilter, setOpenFilter] = useState(false);
  const filterRef = useRef(null);

  const toggleFilter = () => setOpenFilter((prev) => !prev);

  
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
        <select>
          <option>Önerilenler</option>
          <option>Artan Fiyat</option>
          <option>Azalan Fiyat</option>
        </select>
      </div>

      
      {openFilter && <Filter />}
    </div>
  );
}

export default FilterBar;
