"use client";

import HoverMovieCard from "./HoverMovieCard";

type Props = {
  title: string;
  movies: any[];
};

export default function MovieRow({
  title,
  movies = [],
}: Props) {
  return (
    <section className="space-y-4">

      {/* TITLE */}
      <h2 className="text-xl md:text-2xl font-bold text-white px-1">
        {title}
      </h2>

      {/* MOVIE ROW */}
      <div className="flex gap-3 md:gap-5 overflow-x-auto scrollbar-hide pb-2">

        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-[140px] md:w-[220px]"
            >

              <HoverMovieCard movie={movie} />

            </div>
          ))
        ) : (
          <p className="text-gray-400">
            No movies found
          </p>
        )}

      </div>

    </section>
  );
}