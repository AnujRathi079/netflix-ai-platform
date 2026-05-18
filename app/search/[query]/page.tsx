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
  const { query } = await params;

  const movies = await searchMovies(query);

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Search Results
      </h1>

      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {movies.map((movie: any) => (
            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg hover:scale-105 transition"
              />

              <p className="mt-2 text-sm">
                {movie.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}