import { NextResponse } from "next/server";

import Recent from "@/models/Recent";

import { connectDB } from "@/lib/mongodb";

// SAVE RECENT
export async function POST(
  req: Request
) {
  try {
    await connectDB();

    const body = await req.json();

    const existing =
      await Recent.findOne({
        userEmail: body.userEmail,

        movieId: body.movieId,
      });

    if (!existing) {
      await Recent.create(body);
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

// GET RECENTS
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
      await Recent.find({
        userEmail: email,
      })
        .sort({
          createdAt: -1,
        })
        .limit(10);

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