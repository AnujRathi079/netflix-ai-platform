"use client";

import Link from "next/link";
import { useState } from "react";

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
      className="relative block w-full group"
      onMouseEnter={() =>
        setHovered(true)
      }
      onMouseLeave={() =>
        setHovered(false)
      }
    >

      {/* CARD */}
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          transition-all
          duration-500
          md:group-hover:scale-105
          shadow-xl
          bg-zinc-900
        "
      >

        {/* IMAGE */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="
            w-full
            h-[210px]
            md:h-[320px]
            object-cover
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/40
            to-transparent
          "
        />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 p-3 md:p-4 w-full">

          <h2 className="text-white text-sm md:text-lg font-bold line-clamp-1">
            {movie.title}
          </h2>

          <div className="flex items-center gap-2 mt-2 flex-wrap">

            <span className="bg-red-600 px-2 py-1 rounded-full text-[10px] md:text-xs text-white">
              ⭐ {movie.vote_average?.toFixed(1)}
            </span>

            <span className="text-zinc-300 text-[10px] md:text-xs">
              {movie.release_date}
            </span>

          </div>

          {/* DESCRIPTION DESKTOP ONLY */}
          {hovered && (
            <p className="hidden md:block text-zinc-300 text-sm mt-3 line-clamp-3">
              {movie.overview}
            </p>
          )}

        </div>

      </div>

    </Link>
  );
}