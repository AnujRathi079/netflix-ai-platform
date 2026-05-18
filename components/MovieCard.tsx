"use client";

import Link from "next/link";

type Props = {
  movie: any;
};

export default function MovieCard({
  movie,
}: Props) {
  return (
    <Link
      href={`/movie/${movie.id}`}
    >
      <div className="relative group cursor-pointer transition duration-300 hover:scale-110 hover:z-50">
        
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition rounded-lg flex flex-col justify-end p-4">
          
          <h2 className="text-white font-bold text-lg">
            {movie.title}
          </h2>

          <p className="text-gray-300 text-sm">
            ⭐ {movie.vote_average}
          </p>

          <button className="mt-3 bg-red-600 px-3 py-2 rounded text-white text-sm">
            ▶ View Details
          </button>
        </div>
      </div>
    </Link>
  );
}