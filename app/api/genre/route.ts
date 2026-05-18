import { NextResponse } from "next/server";

import { getMoviesByGenre } from "@/lib/tmdb";

export async function GET(req: Request) {
  const { searchParams } =
    new URL(req.url);

  const genre =
    Number(
      searchParams.get("genre")
    );

  const movies =
    await getMoviesByGenre(genre);

  return NextResponse.json(movies);
}