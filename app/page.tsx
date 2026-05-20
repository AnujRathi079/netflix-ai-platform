"use client";

import {
  signIn,
  useSession,
} from "next-auth/react";

import {
  useRouter,
} from "next/navigation";

import {
  useEffect,
} from "react";

export default function LandingPage() {

  const {
    data: session,
    status,
  } = useSession();

  const router = useRouter();

  // AUTO REDIRECT
  useEffect(() => {

    if (session) {
      router.push("/dashboard");
    }

  }, [session, router]);

  // LOADING
  if (status === "loading") {

    return (
      <main className="bg-black min-h-screen flex items-center justify-center text-white">

        <div className="animate-pulse text-2xl">
          Loading...
        </div>

      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >

        <source
          src="https://www.w3schools.com/howto/rain.mp4"
          type="video/mp4"
        />

      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* NETFLIX HEADER */}
      <div className="absolute top-0 left-0 w-full z-20 px-6 py-5">

        <h1 className="text-red-600 text-4xl md:text-5xl font-extrabold tracking-wider">

          NETFLIX

        </h1>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

        <div className="w-full max-w-md bg-black/60 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl">

          {/* TITLE */}
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">

            Unlimited movies,
            TV shows and more.

          </h1>

          <p className="text-gray-300 mt-5 text-lg">

            Watch anywhere.
            Cancel anytime.

          </p>

          {/* LOGIN BUTTON */}
          <button
            onClick={() =>
              signIn("google")
            }
            className="w-full mt-10 bg-red-600 hover:bg-red-700 transition-all duration-300 py-4 rounded-2xl text-white text-lg font-semibold hover:scale-[1.02]"
          >

            Continue with Google

          </button>

          {/* FEATURES */}
          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3 text-gray-300">

              <div className="w-2 h-2 rounded-full bg-red-600" />

              AI Movie Recommendations

            </div>

            <div className="flex items-center gap-3 text-gray-300">

              <div className="w-2 h-2 rounded-full bg-red-600" />

              Personalized Watch History

            </div>

            <div className="flex items-center gap-3 text-gray-300">

              <div className="w-2 h-2 rounded-full bg-red-600" />

              Premium Streaming Experience

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}