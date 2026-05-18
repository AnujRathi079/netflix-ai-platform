"use client";

import Link from "next/link";

import {
  useState,
} from "react";

type Props = {
  movie: any;
};

export default function HoverMovieCard({
  movie,
}: Props) {

  const [hovered, setHovered] =
    useState(false);

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="relative min-w-[220px] max-w-[220px] group"
      onMouseEnter={() =>
        setHovered(true)
      }
      onMouseLeave={() =>
        setHovered(false)
      }
    >

      {/* CARD */}
      <div className="relative overflow-hidden rounded-2xl transition duration-500 group-hover:scale-110 group-hover:z-50 shadow-2xl">

        {/* IMAGE */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[320px] object-cover"
        />

        {/* HOVER OVERLAY */}
        {hovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4 animate-in fade-in duration-300">

            <h2 className="text-white text-lg font-bold line-clamp-1">
              {movie.title}
            </h2>

            <p className="text-zinc-300 text-sm mt-2 line-clamp-3">
              {movie.overview}
            </p>

            <div className="flex items-center gap-3 mt-4">

              <span className="bg-red-600 px-3 py-1 rounded-full text-xs text-white">
                ⭐ {movie.vote_average}
              </span>

              <span className="text-zinc-300 text-xs">
                {movie.release_date}
              </span>

            </div>
          </div>
        )}
      </div>
    </Link>
  );
}