"use client";

import { Play, SkipBack, SkipForward, Pause } from "lucide-react";
import { useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-melody-surface-low h-24 px-4 z-[100]">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between h-full">
        {/* Song Info */}
        <div className="flex items-center gap-4 w-[30%] min-w-[180px]">
          <div className="w-14 h-14 bg-melody-surface-low rounded flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-text-primary text-sm font-medium">
              No song playing
            </span>
            <span className="text-text-secondary text-xs">
              Select a song to play
            </span>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center max-w-[45%] w-full">
          <div className="flex items-center gap-6">
            <button
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Previous track"
            >
              <SkipBack size={20} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-text-primary rounded-full p-2 hover:scale-105 transition-transform"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={24} className="text-melody-base" />
              ) : (
                <Play size={24} className="text-melody-base ml-1" />
              )}
            </button>
            <button
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Next track"
            >
              <SkipForward size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full flex items-center gap-2 mt-2">
            <span className="text-text-secondary text-xs">0:00</span>
            <div className="h-1 bg-melody-surface-low flex-1 rounded-full">
              <div className="h-full w-0 bg-text-primary rounded-full hover:bg-melody-accent" />
            </div>
            <span className="text-text-secondary text-xs">0:00</span>
          </div>
        </div>

        {/* Volume Control (placeholder for now) */}
        <div className="w-[30%] min-w-[180px]" />
      </div>
    </div>
  );
}
