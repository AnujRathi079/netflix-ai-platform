"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  movie: any;
  trailerKey?: string | null;
};

export default function Banner({ movie }: Props) {
  if (!movie) return null;

  return (
    <section className="relative h-[75vh] md:h-[90vh] w-full overflow-hidden text-white">

      {/* BACKDROP IMAGE */}
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        quality={100}
        className="object-cover object-center scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30 z-10" />

      {/* MOBILE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 md:hidden" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-black to-transparent z-10" />

      {/* CONTENT */}
      <div className="absolute z-20 bottom-20 md:bottom-28 left-5 md:left-16 max-w-xl md:max-w-2xl">

        {/* NETFLIX BADGE */}
        <div className="flex items-center gap-2 mb-4">

          <div className="bg-red-600 px-2 py-1 rounded text-xs font-bold tracking-widest">
            N
          </div>

          <span className="uppercase text-xs tracking-[0.3em] text-gray-300">
            Netflix Original
          </span>

        </div>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight drop-shadow-2xl mb-5">
          {movie.title}
        </h1>

        {/* MOVIE INFO */}
        <div className="flex items-center gap-3 text-sm md:text-base text-gray-300 mb-4 flex-wrap">

          <span className="text-green-400 font-semibold">
            98% Match
          </span>

          <span>
            {movie.release_date?.slice(0, 4)}
          </span>

          <span className="border border-gray-400 px-1 text-xs">
            HD
          </span>

        </div>

        {/* DESCRIPTION */}
        <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-8 line-clamp-3 md:line-clamp-4 max-w-xl">
          {movie.overview}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 flex-wrap">

          {/* PLAY BUTTON */}
          <Link
            href={`/movie/${movie.id}`}
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-black font-bold px-6 md:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            ▶ Play
          </Link>

          {/* MORE INFO */}
          <Link
            href={`/movie/${movie.id}`}
            className="flex items-center justify-center gap-2 bg-gray-500/40 hover:bg-gray-500/60 backdrop-blur-md text-white font-semibold px-6 md:px-8 py-3 rounded-lg transition-all duration-300 border border-white/10"
          >
            ℹ More Info
          </Link>

        </div>

      </div>
    </section>
  );
}