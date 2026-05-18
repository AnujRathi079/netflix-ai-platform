"use client";

import Link from "next/link";

import {
  signIn,
  signOut,
  useSession,
} from "next-auth/react";

import SearchBar from "./SearchBar";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

  const { data: session } =
    useSession();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md px-8 py-4 flex items-center justify-between border-b border-zinc-800">

      {/* LOGO */}
      <h1 className="text-red-600 text-4xl font-extrabold tracking-wide">
        NETFLIX
      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* SEARCH */}
        <SearchBar />

        {/* THEME TOGGLE */}
        <ThemeToggle />

        {session ? (
          <>
            {/* USER NAME */}
            <p className="text-white font-medium">
              {session.user?.name}
            </p>

            {/* FAVORITES */}
            <Link
              href="/favorites"
              className="text-white font-semibold hover:text-red-500 transition"
            >
              Favorites
            </Link>

            {/* SIGN OUT */}
            <button
              onClick={() =>
                signOut()
              }
              className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg text-white font-medium"
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            onClick={() =>
              signIn()
            }
            className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg text-white font-medium"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}