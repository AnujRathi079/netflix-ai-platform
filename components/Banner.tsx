"use client";

import Link from "next/link";

import Image from "next/image";

type Props = {
  movie: any;

  trailerKey?: string | null;
};

export default function Banner({
  movie,
}: Props) {

  if (!movie) return null;

  return (
    <section className="relative h-[70vh] md:h-[78vh] w-full overflow-hidden text-white">

      {/* BACKDROP IMAGE */}
      <Image
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        quality={80}
        className="object-cover scale-105"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30 z-10" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10" />

      {/* CONTENT */}
      <div className="absolute z-20 bottom-16 md:bottom-24 left-6 md:left-16 max-w-2xl">

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-2xl mb-5">
          {movie.title}
        </h1>

        {/* OVERVIEW */}
        <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-8 line-clamp-4 max-w-xl">
          {movie.overview}
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-4 flex-wrap">

          <Link
            href={`/movie/${movie.id}`}
            className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-3 rounded-lg text-white font-semibold shadow-xl hover:scale-105"
          >
            ▶ Play
          </Link>

          <Link
            href={`/movie/${movie.id}`}
            className="bg-white/15 hover:bg-white/25 backdrop-blur-md transition-all duration-300 px-8 py-3 rounded-lg text-white font-semibold border border-white/10"
          >
            More Info
          </Link>

        </div>
      </div>
    </section>
  );
}