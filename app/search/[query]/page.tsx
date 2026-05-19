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
    <main className="bg-black min-h-screen text-white px-4 py-24">

      {/* TITLE */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          Search Results
        </h1>

        <p className="text-zinc-400 mt-2">
          Results for:
          <span className="text-white font-semibold ml-2">
            {query}
          </span>
        </p>
      </div>

      {/* EMPTY */}
      {movies.length === 0 ? (

        <div className="flex items-center justify-center py-32">

          <div className="text-center">

            <h2 className="text-2xl font-bold mb-3">
              No movies found
            </h2>

            <p className="text-zinc-400">
              Try another search keyword
            </p>

          </div>

        </div>

      ) : (

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

          {movies.map((movie: any) => (

            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
              className="group"
            >

              <div className="overflow-hidden rounded-xl">

                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-[260px] object-cover rounded-xl transition duration-300 group-hover:scale-105"
                />

              </div>

              <h2 className="mt-3 text-sm md:text-base font-semibold line-clamp-1">
                {movie.title}
              </h2>

            </Link>

          ))}

        </div>

      )}

    </main>
  );
}