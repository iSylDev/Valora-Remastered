import SearchByGenreBadge from "./GenreBadge";


export default function GenreSlideshow() {
  // Add all your genre data here
  const genres = [
    { label: "Action", src: "/images/search-by-genre/action.png" },
    { label: "Adventure", src: "/images/search-by-genre/adventure.png" },
    { label: "Animation", src: "/images/search-by-genre/animation.png" },
    { label: "Comedy", src: "/images/search-by-genre/comedy.png" },
    { label: "Family", src: "/images/search-by-genre/family.png" },
    { label: "Crime", src: "/images/search-by-genre/crime.png" },
    { label: "Documentary", src: "/images/search-by-genre/documentary.png" },
    { label: "Drama", src: "/images/search-by-genre/drama.png" },
    { label: "Fantasy", src: "/images/search-by-genre/fantasy.png" },
    { label: "Horror", src: "/images/search-by-genre/horror.png" },
    { label: "Musical", src: "/images/search-by-genre/musical.png" },
    { label: "Science Fiction", src: "/images/search-by-genre/science-fiction.png" },
    { label: "Thriller", src: "/images/search-by-genre/thriller.png" },
    { label: "War", src: "/images/search-by-genre/war.png" },
    { label: "Western", src: "/images/search-by-genre/western.png" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black py-12">

      {/* Row 1: Normal Direction */}
      <div className="flex gap-4 mb-6">
        <div className="animate-marquee flex gap-4">
          {[...genres, ...genres, ...genres].map((genre, i) => (
            <SearchByGenreBadge key={i} label={genre.label} imageUrl={genre.src} />
          ))}
        </div>
      </div>

      {/* Row 2: Reverse Direction & Slightly Different Speed */}
      <div className="flex gap-4">
        <div className="animate-marquee-reverse flex gap-4">
          {[...genres, ...genres, ...genres].map((genre, i) => (
            <SearchByGenreBadge key={i} label={genre.label} imageUrl={genre.src} />
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <div className="animate-marquee flex gap-4">
          {[...genres, ...genres, ...genres].map((genre, i) => (
            <SearchByGenreBadge key={i} label={genre.label} imageUrl={genre.src} />
          ))}
        </div>
      </div>

      {/* Fade Overlays (Optional but looks like your image) */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10" /> */}

    </section>
  );
}