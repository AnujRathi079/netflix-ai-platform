import Link from "next/link";

import { searchMovies } from "@/lib/tmdb";

type Props = {
  params: Promise<{
    query: string;
  }>;
};

export default async function SearchPage({
  params,
}: Props) {

  // IMPORTANT FIX
  const { query } =
    await params;

  const movies =
    await searchMovies(
      query
    );

  return (
    <main className="bg-black min-h-screen text-white px-4 py-24">

      {/* TITLE */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold mb-2">
          Results for "{query}"
        </h1>

      </div>

      {/* NO MOVIES */}
      {movies.length === 0 ? (

        <div className="text-center py-20">

          <h2 className="text-2xl font-bold">
            No movies found
          </h2>

        </div>

      ) : (

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

          {movies.map(
            (movie: any) => (

              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
              >

                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-xl hover:scale-105 transition duration-300"
                />

                <p className="mt-2 text-sm font-semibold">
                  {movie.title}
                </p>

              </Link>

            )
          )}

        </div>

      )}

    </main>
  );
}