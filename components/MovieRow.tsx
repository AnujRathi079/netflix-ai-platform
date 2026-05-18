import MovieCard from "./MovieCard";
import HoverMovieCard from "./HoverMovieCard";

type Props = {
  title: string;
  movies: any[];
};

export default function MovieRow({
  title,
  movies = [],
}: Props) {
  return (
    <div className="mb-10">

      <h2 className="text-2xl font-bold mb-4 text-white">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide py-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <HoverMovieCard
              key={movie.id}
              movie={movie}
            />
          ))
        ) : (
          <p className="text-gray-400">
            No movies found
          </p>
        )}
      </div>
    </div>
  );
}