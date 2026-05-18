"use client";

import { useEffect, useState } from "react";

import GenreFilter from "./GenreFilter";

export default function GenreMovies() {
  const [selected, setSelected] =
    useState(28);

  const [movies, setMovies] =
    useState<any[]>([]);

  useEffect(() => {
    fetch(
      `/api/genre?genre=${selected}`
    )
      .then((res) => res.json())
      .then((data) =>
        setMovies(data)
      );
  }, [selected]);

  return (
    <div className="px-6 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Browse By Genre
      </h1>

      <GenreFilter
        selected={selected}
        setSelected={setSelected}
      />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg"
            />

            <p className="text-white mt-2">
              {movie.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}