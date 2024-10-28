"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity,
      category,
    };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <form onSubmit={handleSubmit} className="bg-blue-900 rounded-lg p-6 w-full max-w-md mb-8 space-y-4">
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border border-gray-600 rounded-lg px-4 py-2 w-full bg-gray-200 text-black"
      />
      
      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-full ${quantity === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-orange-600 text-white"}`}
        >
          −
        </button>
        <span className="text-xl font-bold text-white">{quantity}</span>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-full ${quantity === 20 ? "bg-gray-500 cursor-not-allowed" : "bg-orange-600 text-white"}`}
        >
          +
        </button>
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-600 rounded-lg px-4 py-2 w-full bg-gray-700 text-white"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg">
        +
      </button>
    </form>
  );
}
