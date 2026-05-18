"use client";

import {
  useState,
} from "react";

import MoodSelector from "./MoodSelector";

import MovieRow from "./MovieRow";

export default function MoodMovies() {

  const [movies, setMovies] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(false);

  const fetchMoodMovies =
    async (
      genreId: number
    ) => {

      try {

        setLoading(true);

        const res = await fetch(
          `/api/mood?genre=${genreId}`
        );

        const data =
          await res.json();

        setMovies(
          data.results || []
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  return (
    <div className="px-6">

      {/* SELECTOR */}
      <MoodSelector
        onSelect={
          fetchMoodMovies
        }
      />

      {/* LOADING */}
      {loading && (
        <p className="text-zinc-400 mt-4">
          Finding movies...
        </p>
      )}

      {/* RESULTS */}
      {movies.length > 0 && (
        <div className="mt-10">
          
          <MovieRow
            title="Recommended For Your Mood"
            movies={movies}
          />
        </div>
      )}

    </div>
  );
}