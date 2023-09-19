import React from "react";

function CategoryFilter({categories, selectedCategory, onCategoryChange}) {
  const categoryBtns = categories.map(category => {
    return <button key={category} className={category === selectedCategory ? "selected" : null} onClick={() => onCategoryChange(category)}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtns}
    </div>
  );
}

export default CategoryFilter;
