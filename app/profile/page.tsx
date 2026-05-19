"use client";

import { signOut } from "next-auth/react";

export default function ProfilePage() {

  return (
    <main className="bg-black min-h-screen text-white pt-24 px-6">

      <div className="max-w-md mx-auto">

        {/* PROFILE */}
        <div className="flex flex-col items-center text-center">

          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-red-600"
          />

          <h1 className="text-3xl font-bold mt-5">
            Anuj
          </h1>

          <p className="text-zinc-400 mt-2">
            Premium Member
          </p>

        </div>

        {/* MENU */}
        <div className="mt-10 space-y-4">

          <button className="w-full bg-zinc-900 hover:bg-zinc-800 py-4 rounded-xl text-left px-5 transition">
            Watch History
          </button>

          <button className="w-full bg-zinc-900 hover:bg-zinc-800 py-4 rounded-xl text-left px-5 transition">
            My Favorites
          </button>

          <button className="w-full bg-zinc-900 hover:bg-zinc-800 py-4 rounded-xl text-left px-5 transition">
            Subscription
          </button>

          <button
            onClick={() =>
              signOut()
            }
            className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold transition"
          >
            Logout
          </button>

        </div>

      </div>

    </main>
  );
}