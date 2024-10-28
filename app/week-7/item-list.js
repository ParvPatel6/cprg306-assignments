// ItemList.js

'use client';

import Item from "./item.js";
import { useState, useEffect } from "react";

const ItemList = ({ items }) => {
  // State to track current sorting criteria and sorted items
  const [sortCriteria, setSortCriteria] = useState("name");
  const [sortedItems, setSortedItems] = useState([...items]);

  // Sorting function to re-arrange items based on sort criteria
  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    const sorted = [...items].sort((a, b) => {
      return criteria === "name"
        ? a.name.localeCompare(b.name)
        : a.category.localeCompare(b.category);
    });
    setSortedItems(sorted);
  };

  // Ensure items are sorted when criteria or items change
  useEffect(() => {
    handleSort(sortCriteria);
  }, [sortCriteria, items]);

  return (
    <div className="max-w-lg mx-auto p-5 bg-[#1e293b] rounded-md shadow-lg">
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Sort items by:</h2>
        <div className="flex gap-2">
          <button
            onClick={() => handleSort("name")}
            className={`py-1 px-3 font-medium rounded ${
              sortCriteria === "name" ? "bg-gray-500" : "bg-gray-400 hover:bg-gray-500"
            } text-black`}
          >
            Name
          </button>
          <button
            onClick={() => handleSort("category")}
            className={`py-1 px-3 font-medium rounded ${
              sortCriteria === "category" ? "bg-gray-500" : "bg-gray-400 hover:bg-gray-500"
            } text-black`}
          >
            Category
          </button>
        </div>
      </header>

      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
