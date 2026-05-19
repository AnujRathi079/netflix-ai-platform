"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-red-600 text-5xl font-extrabold text-center mb-8">
          NETFLIX
        </h1>

        <h2 className="text-white text-3xl font-bold mb-2">
          Welcome Back
        </h2>

        <p className="text-gray-400 mb-8">
          Sign in to continue watching
        </p>

        <button
          onClick={() => signIn("google")}
          className="w-full bg-white text-black font-semibold py-4 rounded-2xl hover:bg-gray-200 transition"
        >
          Continue with Google
        </button>

        <p className="text-gray-500 text-center mt-8 text-sm">
          Unlimited movies, TV shows and more.
        </p>

      </div>

    </main>
  );
}