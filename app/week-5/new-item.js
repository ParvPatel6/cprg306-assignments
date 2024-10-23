"use client"; 

import { useState } from "react";

export default function NewItem() {
 
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState("produce");


  const handleSubmit = (e) => {
    e.preventDefault();

    
    const item = {
      name,
      quantity,
      category,
    };

    
    console.log(item);

    
    alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

 
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-slate-900">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-900 rounded-xl p-6 space-y-4 w-[300px]"
      >
        {/* Name Field */}
        <div>
          <input
            type="text"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-900 rounded-xl px-4 py-2 w-full bg-white"
          />
        </div>

        {/* Quantity Field */}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-4 py-2 rounded-full ${
              quantity === 1
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            −
          </button>
          <span className="text-lg font-bold text-white">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-4 py-2 rounded-full ${
              quantity === 20
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            +
          </button>
        </div>

        {/* Category Field */}
        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 w-full bg-gray-100 text-gray-900"
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
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-xl"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}