import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    const message =
      body.message.toLowerCase();

    let reply =
      "Try watching some trending movies 🎬";

    // SIMPLE AI LOGIC
    if (
      message.includes(
        "horror"
      )
    ) {
      reply =
        "👻 You should watch The Conjuring, Insidious, or Smile.";
    }

    else if (
      message.includes(
        "funny"
      ) ||
      message.includes(
        "comedy"
      )
    ) {
      reply =
        "😂 Try Superbad, The Hangover, or Free Guy.";
    }

    else if (
      message.includes(
        "sci"
      ) ||
      message.includes(
        "space"
      )
    ) {
      reply =
        "🚀 Watch Interstellar, Dune, or The Martian.";
    }

    else if (
      message.includes(
        "romantic"
      )
    ) {
      reply =
        "❤️ Try The Notebook, La La Land, or Titanic.";
    }

    return NextResponse.json({
      reply,
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