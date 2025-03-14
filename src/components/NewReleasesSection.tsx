"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { SpotifyAlbum } from "@/lib/spotify";

function ScrollButton({
  direction,
  onClick,
  isVisible,
}: {
  direction: "left" | "right";
  onClick: () => void;
  isVisible: boolean;
}) {
  if (!isVisible) return null;

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 p-2 rounded-full transition-all duration-200 cursor-pointer ${
        direction === "left" ? "left-0" : "right-0"
      }`}
      aria-label={`Scroll ${direction}`}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-8 h-8 text-white" />
      ) : (
        <ChevronRight className="w-8 h-8 text-white" />
      )}
    </button>
  );
}

export function NewReleasesSection({ albums }: { albums: SpotifyAlbum[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth - 100;
    const newScrollPosition =
      container.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1
    );
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScrollButtons();
    container.addEventListener("scroll", checkScrollButtons);
    window.addEventListener("resize", checkScrollButtons);

    return () => {
      container.removeEventListener("scroll", checkScrollButtons);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold text-text-primary mb-6">
        New Releases
      </h2>
      <div className="relative w-full group">
        <ScrollButton
          direction="left"
          onClick={() => handleScroll("left")}
          isVisible={canScrollLeft}
        />
        <ScrollButton
          direction="right"
          onClick={() => handleScroll("right")}
          isVisible={canScrollRight}
        />

        {/* Left Gradient */}
        <div
          className={`absolute left-0 top-0 bottom-4 w-24 bg-gradient-to-r from-melody-base to-transparent pointer-events-none z-[1] transition-opacity duration-200 ${
            !canScrollLeft && "opacity-0"
          }`}
        />

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar min-w-0 relative"
        >
          {albums.map((album) => (
            <div
              key={album.id}
              className="flex-none w-[180px] bg-melody-surface-low p-4 rounded-md hover:bg-melody-surface-high transition-colors group cursor-pointer"
            >
              <div className="aspect-square relative mb-4 rounded-md shadow-lg overflow-hidden">
                <Image
                  src={album.images[0].url}
                  alt={album.name}
                  fill
                  sizes="180px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-text-primary font-semibold mb-2 truncate">
                {album.name}
              </h3>
              <p className="text-text-secondary text-sm truncate">
                {album.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          ))}
        </div>

        {/* Right Gradient */}
        <div
          className={`absolute right-0 top-0 bottom-4 w-24 bg-gradient-to-l from-melody-base to-transparent pointer-events-none z-[1] transition-opacity duration-200 ${
            !canScrollRight && "opacity-0"
          }`}
        />
      </div>
    </>
  );
}
