import { NextResponse } from "next/server";

import Favorite from "@/models/Favorite";

import { connectDB } from "@/lib/mongodb";

// GET FAVORITES
export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const email =
      searchParams.get("email");

    const favorites =
      await Favorite.find({
        userEmail: email,
      });

    return NextResponse.json(
      favorites
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

// ADD FAVORITE
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const favorite =
      await Favorite.create({
        userEmail: body.userEmail,

        movieId: body.movieId,

        title: body.title,

        poster: body.poster,
      });

    return NextResponse.json(
      favorite
    );
  } catch (error) {
    console.log(
      "FAVORITES ERROR:",
      error
    );

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

// DELETE FAVORITE
export async function DELETE(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    await Favorite.deleteOne({
      movieId: body.movieId,
      userEmail: body.userEmail,
    });

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