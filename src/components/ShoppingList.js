import React, { useState } from "react";
import Item from "./Item"; // Import Item component to render each item

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const itemsToDisplay = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value); 
  }

  return (
    <div className="ShoppingList">
      <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} /> 
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList; 
