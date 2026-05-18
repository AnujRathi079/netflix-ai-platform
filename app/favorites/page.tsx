"use client";

import { Trash2 } from "lucide-react";

import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";

import Link from "next/link";

export default function FavoritesPage() {
  const { data: session } =
    useSession();

  const [favorites, setFavorites] =
    useState<any[]>([]);

  // FETCH FAVORITES
  useEffect(() => {
    if (session?.user?.email) {
      fetch(
        `/api/favorites?email=${session.user.email}`
      )
        .then((res) => res.json())
        .then((data) =>
          setFavorites(data)
        );
    }
  }, [session]);

  // REMOVE FAVORITE
  const removeFavorite = async (
    movieId: number
  ) => {
    await fetch("/api/favorites", {
      method: "DELETE",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        movieId,

        userEmail:
          session?.user?.email,
      }),
    });

    setFavorites((prev) =>
      prev.filter(
        (movie) =>
          movie.movieId !== movieId
      )
    );
  };

  return (
    <div className="bg-black min-h-screen text-white p-10">
      
      <h1 className="text-4xl font-bold mb-10">
        My Favorites ❤️
      </h1>

      {favorites.length === 0 ? (
        <p>No favorites added yet</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          
          {favorites.map((movie) => (
            <div key={movie.movieId}>
              
              <Link
                href={`/movie/${movie.movieId}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                  alt={movie.title}
                  className="rounded-lg hover:scale-105 transition"
                />

                <p className="mt-2 text-sm">
                  {movie.title}
                </p>
              </Link>

              <button
                onClick={() =>
                  removeFavorite(
                    movie.movieId
                  )
                }
                className="mt-2 bg-red-600 px-3 py-1 rounded flex items-center gap-2 text-sm"
              >
                <Trash2 size={16} />

                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}