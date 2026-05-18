import Banner from "@/components/Banner";

import Navbar from "@/components/Navbar";

import GenreMovies from "@/components/GenreMovies";

import RecentMovies from "@/components/RecentMovies";

import ContinueWatchingRow from "@/components/ContinueWatchingRow";

import ProfileSelector from "@/components/ProfileSelector";

import HomeContent from "@/components/HomeContent";

import MoodMovies from "@/components/MoodMovies";

import AIMovieAssistant from "@/components/AIMovieAssistant";

import {
  getTrendingMovies,
  getTopRated,
  getActionMovies,
  getMovieTrailer,
  getKidsMovies,
} from "@/lib/tmdb";

export default async function Home() {

  // FETCH MOVIES
  const trending =
    await getTrendingMovies();

  const topRated =
    await getTopRated();

  const actionMovies =
    await getActionMovies();

  const kidsMovies =
    await getKidsMovies();

  // RANDOM HERO MOVIE
  const randomMovie =
    trending?.length > 0
      ? trending[
          Math.floor(
            Math.random() *
              trending.length
          )
        ]
      : null;

  // HERO TRAILER
  const trailer =
    randomMovie
      ? await getMovieTrailer(
          randomMovie.id
        )
      : null;

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* PROFILE SELECTOR */}
      <ProfileSelector />

      {/* HERO BANNER */}
      {randomMovie && (
        <Banner
          movie={randomMovie}
          trailerKey={null}
        />
      )}

      {/* CONTENT */}
      <div className="relative z-20 space-y-16 pb-24">

        {/* CONTINUE WATCHING */}
        <ContinueWatchingRow />

        {/* MOOD AI */}
        <MoodMovies />

        {/* RECENTLY WATCHED */}
        <RecentMovies />

        {/* MAIN ROWS */}
        <HomeContent
          trending={trending}
          topRated={topRated}
          actionMovies={actionMovies}
          kidsMovies={kidsMovies}
        />

        {/* GENRES */}
        <GenreMovies />

      </div>

      {/* AI ASSISTANT */}
      <AIMovieAssistant />

    </main>
  );
}