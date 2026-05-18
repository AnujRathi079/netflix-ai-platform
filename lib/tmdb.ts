const API_KEY = process.env.TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

async function fetchData(url: string) {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("TMDB request failed");
    }

    return await res.json();
  } catch (error) {
    console.log("TMDB ERROR:", error);

    return null;
  }
}

// Trending
export async function getTrendingMovies() {
  const data = await fetchData(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );

  return data?.results || [];
}

// Top Rated
export async function getTopRated() {
  const data = await fetchData(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  );

  return data?.results || [];
}

// Action Movies
export async function getActionMovies() {
  const data = await fetchData(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
  );

  return data?.results || [];
}

// Single Movie
export async function getMovie(id: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.log("Movie fetch failed");

      return null;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("TMDB MOVIE ERROR:", error);

    return null;
  }
}


// Videos
export async function getMovieVideos(id: string) {
  const data = await fetchData(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
  );

  return data?.results || [];
}

// Search
export async function searchMovies(query: string) {
  const data = await fetchData(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return data?.results || [];
}
export async function getMoviesByGenre(
  genreId: number
) {
  const data = await fetchData(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );

  return data?.results || [];
}
export async function getMovieTrailer(
  movieId: number
) {
  const data = await fetchData(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
  );

  const trailer =
    data?.results?.find(
      (video: any) =>
        video.type === "Trailer" &&
        video.site === "YouTube"
    );

  return trailer || null;
}
export async function getKidsMovies() {
  const data = await fetchData(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&certification_country=US&certification.lte=PG`
  );

  return data?.results || [];
}