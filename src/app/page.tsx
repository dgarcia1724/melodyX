export default function Home() {
  return (
    <div className="px-6 py-4">
      {/* Welcome Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-6">
          Good afternoon
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Recently Played Items */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <button
              key={item}
              className="flex items-center bg-melody-surface-low hover:bg-melody-surface-high transition-colors rounded-md overflow-hidden group"
            >
              <div className="w-20 h-20 bg-melody-surface flex-shrink-0" />
              <span className="text-text-primary font-bold px-4">
                Recently Played {item}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Made For You Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Made for you
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-melody-surface-low p-4 rounded-md hover:bg-melody-surface-high transition-colors group cursor-pointer"
            >
              <div className="aspect-square bg-melody-surface mb-4 rounded-md shadow-lg" />
              <h3 className="text-text-primary font-semibold mb-2 truncate">
                Daily Mix {item}
              </h3>
              <p className="text-text-secondary text-sm line-clamp-2">
                Your daily music mix with your favorite artists and new
                discoveries
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Featured Artists
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-melody-surface-low p-4 rounded-md hover:bg-melody-surface-high transition-colors group cursor-pointer"
            >
              <div className="aspect-square bg-melody-surface mb-4 rounded-full shadow-lg" />
              <h3 className="text-text-primary font-semibold mb-2 text-center truncate">
                Artist {item}
              </h3>
              <p className="text-text-secondary text-sm text-center">Artist</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Added Section */}
      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Recently Added
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-melody-surface-low p-4 rounded-md hover:bg-melody-surface-high transition-colors group cursor-pointer"
            >
              <div className="aspect-square bg-melody-surface mb-4 rounded-md shadow-lg" />
              <h3 className="text-text-primary font-semibold mb-2 truncate">
                New Album {item}
              </h3>
              <p className="text-text-secondary text-sm line-clamp-2">
                Latest addition to your music collection
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
