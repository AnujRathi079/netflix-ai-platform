import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import GenreMovies from "@/components/GenreMovies";
import RecentMovies from "@/components/RecentMovies";
import ContinueWatchingRow from "@/components/ContinueWatchingRow";

import HomeContent from "@/components/HomeContent";
import MoodMovies from "@/components/MoodMovies";
import AIMovieAssistant from "@/components/AIMovieAssistant";
import MobileNav from "@/components/MobileNav";

import {
  getTrendingMovies,
  getTopRated,
  getActionMovies,
  getMovieTrailer,
  getKidsMovies,
} from "@/lib/tmdb";

export default async function Home() {

  // FETCH MOVIES
  const trending = await getTrendingMovies();

  const topRated = await getTopRated();

  const actionMovies = await getActionMovies();

  const kidsMovies = await getKidsMovies();

  // RANDOM HERO MOVIE
  const randomMovie =
    trending?.length > 0
      ? trending[
      Math.floor(
        Math.random() * trending.length
      )
      ]
      : null;

  // HERO TRAILER
  const trailer =
    randomMovie
      ? await getMovieTrailer(randomMovie.id)
      : null;

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden pb-24">
      {/* NAVBAR */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* PROFILE SELECTOR */}
      <div className="px-4 sm:px-6 md:px-10 pt-4">
        
      </div>

      {/* HERO BANNER */}
      {randomMovie && (
        <section className="relative h-[70vh] sm:h-[80vh] md:h-screen">
          <Banner
            movie={randomMovie}
            trailerKey={trailer}
          />
        </section>
      )}

      {/* CONTENT */}
      <div className="relative z-20 space-y-10 sm:space-y-14 md:space-y-16 pb-28 px-4 sm:px-6 md:px-10">

        {/* CONTINUE WATCHING */}
        <section>
          <ContinueWatchingRow />
        </section>

        {/* MOOD AI */}
        <section>
          <MoodMovies />
        </section>

        {/* RECENTLY WATCHED */}
        <section>
          <RecentMovies />
        </section>

        {/* MAIN ROWS */}
        <section>
          <HomeContent
            trending={trending}
            topRated={topRated}
            actionMovies={actionMovies}
            kidsMovies={kidsMovies}
          />
        </section>

        {/* GENRES */}
        <section>
          <GenreMovies />
        </section>

      </div>

      {/* AI ASSISTANT */}
      <AIMovieAssistant />

      {/* MOBILE NAVIGATION */}
      <MobileNav />

    </main>
  );
}