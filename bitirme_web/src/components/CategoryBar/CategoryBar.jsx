import React, { useState } from "react";
import { categories } from "../CategoryBar/CategoryData";
import "./CategoryBar.css";

function CategoryBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  return (
    <div className="category-bar">
      {categories.map((cat, index) => (
        <div style={{fontFamily : 'fantasy'}}
          key={index}
          className="category-item"
          onMouseEnter={() => cat.subcategories && setActiveDropdown(cat.name)}
          onMouseLeave={() => {
            setActiveDropdown(null);
            setActiveSubDropdown(null);
          }}
        >
          <span>{cat.name}</span>

          
          {cat.subcategories && activeDropdown === cat.name && (
            <div
              className="dropdown-menu"
              onMouseEnter={() => setActiveDropdown(cat.name)} 
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {cat.subcategories.map((sub, i) => (
                <div
                  key={i}
                  className="dropdown-item"
                  onMouseEnter={() =>
                    sub.subcategories && setActiveSubDropdown(sub.name)
                  }
                  onMouseLeave={() => setActiveSubDropdown(null)}
                >
                  <span>{sub.name || sub}</span>

                  
                  {sub.subcategories &&
                    activeSubDropdown === sub.name && (
                      <div
                        className="sub-dropdown"
                        onMouseEnter={() => setActiveSubDropdown(sub.name)}
                        onMouseLeave={() => setActiveSubDropdown(null)}
                      >
                        {sub.subcategories.map((deep, j) => (
                          <a key={j} href="#" className="dropdown-subitem">
                            {deep}
                          </a>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CategoryBar;
