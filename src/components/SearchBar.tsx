"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`flex items-center gap-2 bg-melody-surface-low rounded-full px-4 py-2 w-[364px] ${
        isFocused ? "ring-2 ring-white" : ""
      }`}
    >
      <Search size={20} className="text-text-secondary" />
      <input
        type="text"
        placeholder="What do you want to listen to?"
        className="bg-transparent w-full text-text-primary placeholder-text-secondary focus:outline-none text-sm"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
