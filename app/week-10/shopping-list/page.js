// Page.js
"use client"; // Add this line at the very beginning

import React, { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("all");

  // Handle login
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Handle adding a new item
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  // Handle selecting an item for meal ideas
  const handleItemSelect = (name) => {
    const cleanedName = name.split(",")[0].replace(/[\u{1F600}-\u{1F6FF}]/gu, "").trim();
    setSelectedItemName(cleanedName);
  };

  // Handle category filtering
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Filter items based on search and category
  const filteredItems = items.filter(item => {
    return (
      item.name.toLowerCase().includes(filter.toLowerCase()) &&
      (category === "all" || item.category === category)
    );
  });

  if (!user) {
    return (
      <main className="min-h-screen bg-gray-900 text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
        <button 
          onClick={handleLogin} 
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Login with GitHub
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Shopping List</h1>
        <div>
          <span className="mr-4">Welcome, {user.displayName}</span>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </header>

      <div className="flex gap-8">
        <div className="w-1/2 bg-gray-800 p-6 rounded-lg">
          <NewItem onAddItem={handleAddItem} />

          <div className="mt-4">
            <input
              type="text"
              placeholder="Search items..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="category" className="block mb-2 text-sm">
              Filter by Category:
            </label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option value="all">All</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="dairy">Dairy</option>
              <option value="meat">Meat</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          <ItemList items={filteredItems} onItemSelect={handleItemSelect} />
        </div>

        <div className="w-1/2 bg-gray-800 p-6 rounded-lg">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
