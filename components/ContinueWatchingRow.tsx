"use client";

import {
  useEffect,
  useState,
} from "react";

import { useSession } from "next-auth/react";

import Link from "next/link";

export default function ContinueWatchingRow() {

  const { data: session } =
    useSession();

  const [movies, setMovies] =
    useState<any[]>([]);

  useEffect(() => {

    if (session?.user?.email) {

      fetch(
        `/api/continue?email=${session.user.email}`
      )
        .then((res) => res.json())
        .then((data) => {

          // REMOVE INVALID / DUPLICATE MOVIES
          const uniqueMovies =
            Array.from(
              new Map(
                data
                  .filter(
                    (movie: any) =>
                      movie &&
                      movie.poster
                  )
                  .map(
                    (movie: any) => [
                      movie.movieId,
                      movie,
                    ]
                  )
              ).values()
            );

          setMovies(uniqueMovies);
        });
    }

  }, [session]);

  if (movies.length === 0)
    return null;

  return (
    <div className="px-6 mt-12">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6 text-white">
        Continue Watching
      </h1>

      {/* ROW */}
      <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4">

        {movies.map((movie: any) => (

          <Link
            key={movie._id}
            href={`/movie/${movie.movieId}`}
            className="min-w-[180px] max-w-[180px] group"
          >

            {/* CARD */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg">

              {/* POSTER */}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                alt={movie.title}
                className="w-full h-[270px] object-cover rounded-2xl transition duration-300 group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />

              {/* PROGRESS BAR */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-700">

                <div
                  className="h-1 bg-red-600"
                  style={{
                    width: `${movie.progress}%`,
                  }}
                />
              </div>

            </div>

            {/* MOVIE TITLE */}
            <p className="text-white mt-3 text-sm font-medium line-clamp-2 group-hover:text-red-400 transition">
              {movie.title}
            </p>

          </Link>
        ))}
      </div>
    </div>
  );
}