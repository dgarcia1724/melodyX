import { getTopTracks, getFeaturedPlaylists } from "@/lib/spotify";
import type { SpotifyAlbum, SpotifyPlaylist } from "@/lib/spotify";
import Image from "next/image";
import { Music, ListMusic } from "lucide-react";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const [topTracks, featuredPlaylists] = await Promise.all([
    getTopTracks(),
    getFeaturedPlaylists(),
  ]);

  return (
    <div className="px-6 py-4">
      {/* New Releases Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-6">
          New Releases
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {topTracks.length > 0 ? (
            topTracks.slice(0, 6).map((album: SpotifyAlbum) => (
              <div
                key={album.id}
                className="bg-melody-surface-low p-4 rounded-md hover:bg-melody-surface-high transition-colors group cursor-pointer"
              >
                <div className="aspect-square relative mb-4 rounded-md shadow-lg overflow-hidden">
                  <Image
                    src={album.images[0].url}
                    alt={album.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-text-primary font-semibold mb-2 truncate">
                  {album.name}
                </h3>
                <p className="text-text-secondary text-sm truncate">
                  {album.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-text-secondary">
              <Music size={48} className="mb-4" />
              <p className="text-lg">No new releases available</p>
              <p className="text-sm">Please check back later</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Playlists Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Featured Playlists
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {featuredPlaylists.length > 0 ? (
            featuredPlaylists.slice(0, 6).map((playlist: SpotifyPlaylist) => (
              <div
                key={playlist.id}
                className="bg-melody-surface-low p-4 rounded-md hover:bg-melody-surface-high transition-colors group cursor-pointer"
              >
                <div className="aspect-square relative mb-4 rounded-md shadow-lg overflow-hidden">
                  <Image
                    src={playlist.images[0].url}
                    alt={playlist.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-text-primary font-semibold mb-2 truncate">
                  {playlist.name}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-2">
                  {playlist.description}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-text-secondary">
              <ListMusic size={48} className="mb-4" />
              <p className="text-lg">No featured playlists available</p>
              <p className="text-sm">Please check back later</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
