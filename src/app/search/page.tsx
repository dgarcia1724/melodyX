"use client";

export default function SearchPage() {
  return (
    <div className="px-6 py-4">
      {/* Top Results Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Top Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-melody-surface-low p-6 rounded-lg hover:bg-melody-surface-high transition-colors cursor-pointer">
            <div className="w-24 h-24 bg-melody-surface rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Artist Name
            </h3>
            <p className="text-text-secondary">Artist</p>
          </div>
        </div>
      </section>

      {/* Songs Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Songs</h2>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 p-2 rounded-md hover:bg-melody-surface-low transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 bg-melody-surface flex-shrink-0" />
              <div className="flex-grow">
                <h3 className="text-text-primary group-hover:text-melody-accent">
                  Song Title {item}
                </h3>
                <p className="text-text-secondary text-sm">Artist Name</p>
              </div>
              <span className="text-text-secondary text-sm">3:30</span>
            </div>
          ))}
        </div>
      </section>

      {/* Artists Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Artists</h2>
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

      {/* Albums Section */}
      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-4">Albums</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-melody-surface-low p-4 rounded-md hover:bg-melody-surface-high transition-colors group cursor-pointer"
            >
              <div className="aspect-square bg-melody-surface mb-4 rounded-md shadow-lg" />
              <h3 className="text-text-primary font-semibold mb-2 truncate">
                Album {item}
              </h3>
              <p className="text-text-secondary text-sm truncate">
                Artist Name
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
