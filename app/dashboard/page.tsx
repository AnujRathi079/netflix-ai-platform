import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import GenreMovies from "@/components/GenreMovies";
import RecentMovies from "@/components/RecentMovies";
import ContinueWatchingRow from "@/components/ContinueWatchingRow";
import HomeContent from "@/components/HomeContent";
import MoodMovies from "@/components/MoodMovies";
import AIMovieAssistant from "@/components/AIMovieAssistant";

import {
  getTrendingMovies,
  getTopRated,
  getActionMovies,
  getKidsMovies,
} from "@/lib/tmdb";

export default async function DashboardPage() {

  const trending =
    await getTrendingMovies();

  const topRated =
    await getTopRated();

  const actionMovies =
    await getActionMovies();

  const kidsMovies =
    await getKidsMovies();

  const randomMovie =
    trending?.length > 0
      ? trending[
          Math.floor(
            Math.random() *
              trending.length
          )
        ]
      : null;

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">

      <Navbar />

      {randomMovie && (
        <Banner
          movie={randomMovie}
          trailerKey={null}
        />
      )}

      <div className="relative z-20 space-y-16 pb-28">

        <ContinueWatchingRow />

        <MoodMovies />

        <RecentMovies />

        <HomeContent
          trending={trending}
          topRated={topRated}
          actionMovies={actionMovies}
          kidsMovies={kidsMovies}
        />

        <GenreMovies />

      </div>

      <AIMovieAssistant />

    </main>
  );
}