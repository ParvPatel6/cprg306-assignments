"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#0f172a] text-white p-6">
      <h1 className="text-4xl font-bold mb-8">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList className ="text-white" items={items} />
    </div>
  );
}
