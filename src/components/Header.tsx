"use client";

import Link from "next/link";
import { Headphones } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#181818] border-b border-melody-surface-low z-50">
      <div className="ml-64 h-16">
        <div className="flex items-center justify-between px-6 h-full">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-text-primary hover:text-melody-accent transition-colors"
            >
              <Headphones size={32} className="text-melody-accent" />
              <span className="text-xl font-bold">MelodyX</span>
            </Link>
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}
