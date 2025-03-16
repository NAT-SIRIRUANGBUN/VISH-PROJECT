"use client";

import { useState } from "react";

export default function MerchandiseChoice({
  onSelect,
}: {
  onSelect?: (selected: string) => void; // Callback to notify parent of selection
}) {
  const [activeItem, setActiveItem] = useState("all");

  const handleSelect = (item: string) => {
    setActiveItem(item);
    if (onSelect) onSelect(item); // Call the callback with the selected item
  };

  // Merchandise options
  const items = [
    { id: "all", label: "ทั้งหมด" },
    { id: "yantra", label: "ยันต์" },
    { id: "holythread", label: "สายสิญจน์" },
    { id: "takrud", label: "ตะกรุด" },
    { id: "other", label: "อื่นๆ" },
  ];

  return (
    <div className="flex items-center justify-center bg-white rounded-full p-2">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleSelect(item.id)}
          className={`px-8 py-2 rounded-full text-[20px] font-regular transition-all duration-300 ${
            activeItem === item.id
              ? "bg-secondary text-white"
              : "bg-transparent text-black"
          } hover:cursor-pointer`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}