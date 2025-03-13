"use client";

import Link from "next/link";
import { Home, Search, Library, Plus } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-melody-surface p-6">
      {/* Main Navigation */}
      <nav className="space-y-6">
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors"
            >
              <Home size={24} />
              <span className="font-semibold">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className="flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors"
            >
              <Search size={24} />
              <span className="font-semibold">Search</span>
            </Link>
          </li>
        </ul>

        {/* Library Section */}
        <div className="pt-4">
          <div className="flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors cursor-pointer p-2 rounded-md hover:bg-melody-surface-low">
            <Library size={24} />
            <span className="font-semibold">Your Library</span>
            <Plus
              size={20}
              className="ml-auto hover:bg-melody-surface-high rounded-full"
            />
          </div>

          {/* Playlists Container */}
          <div className="mt-4 space-y-2">
            <div className="bg-melody-surface-low rounded-md p-4">
              <h2 className="text-text-primary font-semibold mb-2">
                Create your first playlist
              </h2>
              <p className="text-text-secondary text-sm mb-4">
                It&apos;s easy, we&apos;ll help you
              </p>
              <button className="bg-text-primary text-melody-base px-4 py-1 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                Create playlist
              </button>
            </div>

            <div className="bg-melody-surface-low rounded-md p-4">
              <h2 className="text-text-primary font-semibold mb-2">
                Let&apos;s find some podcasts
              </h2>
              <p className="text-text-secondary text-sm mb-4">
                We&apos;ll keep you updated
              </p>
              <button className="bg-text-primary text-melody-base px-4 py-1 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                Browse podcasts
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Legal Links */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex flex-wrap gap-2 text-xs text-text-secondary mb-6">
          <Link href="#" className="hover:underline">
            Legal
          </Link>
          <Link href="#" className="hover:underline">
            Privacy Center
          </Link>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Cookies
          </Link>
          <Link href="#" className="hover:underline">
            About Ads
          </Link>
          <Link href="#" className="hover:underline">
            Accessibility
          </Link>
        </div>
      </div>
    </aside>
  );
}
