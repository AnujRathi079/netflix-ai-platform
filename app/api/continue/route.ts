import { NextResponse } from "next/server";

import ContinueWatching from "@/models/ContinueWatching";

import { connectDB } from "@/lib/mongodb";

// SAVE
export async function POST(
  req: Request
) {
  try {
    await connectDB();

    const body = await req.json();

    const existing =
      await ContinueWatching.findOne({
        userEmail: body.userEmail,

        movieId: body.movieId,
      });

    if (existing) {
      existing.progress =
        body.progress;

      await existing.save();
    } else {
      await ContinueWatching.create(
        body
      );
    }

    return NextResponse.json({
      success: true,
    });
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

// GET
export async function GET(
  req: Request
) {
  try {
    await connectDB();

    const { searchParams } =
      new URL(req.url);

    const email =
      searchParams.get("email");

    const movies =
      await ContinueWatching.find({
        userEmail: email,
      });

    return NextResponse.json(
      movies
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