"use client";

import { useEffect, useState } from "react";

import MovieRow from "./MovieRow";

type Props = {
  trending: any[];
  topRated: any[];
  actionMovies: any[];
  kidsMovies: any[];
};

export default function HomeContent({
  trending,
  topRated,
  actionMovies,
  kidsMovies,
}: Props) {

  const [profile, setProfile] = useState("");

  useEffect(() => {
    const saved =
      localStorage.getItem("netflix-profile") || "";

    setProfile(saved);
  }, []);

  // KIDS MODE
  if (profile === "Kids") {
    return (
      <div className="px-4 md:px-8 mt-8 space-y-8">

        <MovieRow
          title="Kids Movies"
          movies={kidsMovies}
        />

      </div>
    );
  }

  // NORMAL MODE
  return (
    <div className="px-4 md:px-8 mt-8 space-y-10">

      <MovieRow
        title="Trending Now"
        movies={trending}
      />

      <MovieRow
        title="Top Rated"
        movies={topRated}
      />

      <MovieRow
        title="Action Movies"
        movies={actionMovies}
      />

    </div>
  );
}