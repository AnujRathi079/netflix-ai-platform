"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">

      <div className="bg-zinc-900 p-10 rounded-2xl w-[400px] shadow-2xl">

        <h1 className="text-red-600 text-5xl font-bold text-center mb-6">
          NETFLIX
        </h1>

        <h2 className="text-white text-3xl font-semibold mb-2">
          Sign In
        </h2>

        <p className="text-gray-400 mb-6">
          Continue with your account provider
        </p>

        <div className="space-y-4">

          {/* Google */}
          <button
            type="button"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/dashboard",
              })
            }
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Continue with Google
          </button>

          {/* GitHub */}
          <button
            type="button"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/dashboard",
              })
            }
            className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Continue with GitHub
          </button>

        </div>

      </div>

    </main>
  );
}