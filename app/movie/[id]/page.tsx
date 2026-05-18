import {
  getMovie,
  getMovieVideos,
} from "@/lib/tmdb";

import MovieDetailsClient from "@/components/MovieDetailsClient";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MoviePage({
  params,
}: Props) {
  const resolvedParams = await params;

  const movie = await getMovie(
    resolvedParams.id
  );

  if (!movie || !movie.id) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center text-3xl">
        Movie Not Found
      </div>
    );
  }

  const videos = await getMovieVideos(
    resolvedParams.id
  );

  const trailer = videos.find(
    (video: any) =>
      video.type === "Trailer" &&
      video.site === "YouTube"
  );

  return (
    <MovieDetailsClient
      movie={movie}
      trailerKey={trailer?.key || null}
    />
  );
}