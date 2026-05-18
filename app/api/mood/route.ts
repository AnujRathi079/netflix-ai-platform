import { NextResponse } from "next/server";

const API_KEY =
  process.env.TMDB_API_KEY;

const BASE_URL =
  "https://api.themoviedb.org/3";

export async function GET(
  req: Request
) {

  try {

    const { searchParams } =
      new URL(req.url);

    const genre =
      searchParams.get(
        "genre"
      );

    const res = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}`,
      {
        cache: "no-store",
      }
    );

    const data =
      await res.json();

    return NextResponse.json(
      data
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Failed",
      },
      {
        status: 500,
      }
    );
  }
}