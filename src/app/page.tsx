import { getTopTracks } from "@/lib/spotify";
import type { SpotifyAlbum } from "@/lib/spotify";
import { Music } from "lucide-react";
import { NewReleasesSection } from "@/components/NewReleasesSection";

export const revalidate = 3600;

export default async function Home() {
  const topTracks = await getTopTracks();

  return (
    <div className="px-6 py-4 w-full">
      {/* New Releases Section */}
      <section className="w-full">
        {topTracks.length > 0 ? (
          <NewReleasesSection albums={topTracks} />
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-text-secondary">
            <Music size={48} className="mb-4" />
            <p className="text-lg">No new releases available</p>
            <p className="text-sm">Please check back later</p>
          </div>
        )}
      </section>
    </div>
  );
}
