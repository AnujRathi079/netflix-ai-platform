"use client";

import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";

import { Heart } from "lucide-react";

import TrailerModal from "./TrailerModal";

type Props = {
  movie: any;

  trailerKey: string | null;
};

export default function MovieDetailsClient({
  movie,
  trailerKey,
}: Props) {
  const [open, setOpen] =
    useState(false);

  const { data: session } =
    useSession();

  // SAVE RECENT + CONTINUE WATCHING
  useEffect(() => {
    if (session?.user?.email) {
      
      // RECENTLY WATCHED
      fetch("/api/recent", {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          userEmail:
            session.user.email,

          movieId: movie.id,

          title: movie.title,

          poster:
            movie.poster_path,
        }),
      });

      // CONTINUE WATCHING
      fetch("/api/continue", {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          userEmail:
            session.user.email,

          movieId: movie.id,

          title: movie.title,

          poster:
            movie.poster_path,

          progress: 45,
        }),
      });
    }
  }, [session, movie]);

  // FAVORITES
  const addToFavorites =
    async () => {
      if (!session?.user?.email) {
        alert(
          "Please login first"
        );

        return;
      }

      const res = await fetch(
        "/api/favorites",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            userEmail:
              session.user.email,

            movieId: movie.id,

            title: movie.title,

            poster:
              movie.poster_path,
          }),
        }
      );

      if (res.ok) {
        alert(
          "Added to favorites ❤️"
        );
      } else {
        alert(
          "Failed to add favorite"
        );
      }
    };

  return (
    <>
      {/* TRAILER MODAL */}
      {open && trailerKey && (
        <TrailerModal
          videoKey={trailerKey}
          onClose={() =>
            setOpen(false)
          }
        />
      )}

      <div className="bg-black text-white min-h-screen p-10">
        
        <div className="flex flex-col md:flex-row gap-10">
          
          {/* POSTER */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-[300px] rounded-lg"
          />

          {/* DETAILS */}
          <div>
            
            <h1 className="text-5xl font-bold mb-4">
              {movie.title}
            </h1>

            <p className="text-gray-300 mb-4">
              {movie.overview}
            </p>

            <p className="mb-2">
              ⭐ Rating:
              {" "}
              {movie.vote_average}
            </p>

            <p className="mb-6">
              📅 Release:
              {" "}
              {movie.release_date}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap">
              
              {trailerKey && (
                <button
                  onClick={() =>
                    setOpen(true)
                  }
                  className="bg-red-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-red-700"
                >
                  ▶ Watch Trailer
                </button>
              )}

              <button
                onClick={
                  addToFavorites
                }
                className="bg-pink-600 px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-2 hover:bg-pink-700"
              >
                <Heart size={20} />

                Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}