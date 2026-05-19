import Link from "next/link";
import { searchMovies } from "@/lib/tmdb";

type Props = {
  params: {
    query: string;
  };
};

export default async function SearchPage({
  params,
}: Props) {

  const movies = await searchMovies(
    params.query
  );

  return (
    <main className="bg-black min-h-screen text-white px-4 py-24">

      <h1 className="text-3xl font-bold mb-8">
        Results for "{params.query}"
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

        {movies.map((movie: any) => (

          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
          >

            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-xl hover:scale-105 transition"
            />

            <p className="mt-2 text-sm">
              {movie.title}
            </p>

          </Link>

        ))}

      </div>

    </main>
  );
}