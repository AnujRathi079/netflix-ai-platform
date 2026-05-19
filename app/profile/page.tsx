"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import {
  Heart,
  History,
  Settings,
  LogOut,
  ArrowLeft,
} from "lucide-react";

export default function ProfilePage() {

  const { data: session } = useSession();

  return (
    <main className="bg-black min-h-screen text-white p-5">

      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-8">

        <Link
          href="/"
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          <ArrowLeft size={20} />
          Back
        </Link>

        <h1 className="text-2xl font-bold">
          Profile
        </h1>

      </div>

      {/* PROFILE CARD */}
      <div className="bg-zinc-900 rounded-3xl p-6 mb-8">

        <div className="flex flex-col items-center text-center">

          <img
            src={
              session?.user?.image ||
              "https://i.pravatar.cc/150"
            }
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-red-600"
          />

          <h2 className="text-2xl font-bold mt-4">
            {session?.user?.name || "Netflix User"}
          </h2>

          <p className="text-gray-400 mt-1">
            {session?.user?.email}
          </p>

        </div>

      </div>

      {/* MENU */}
      <div className="space-y-4">

        <Link
          href="/profile/favorites"
          className="flex items-center justify-between bg-zinc-900 p-5 rounded-2xl hover:bg-zinc-800 transition"
        >
          <div className="flex items-center gap-4">

            <Heart className="text-red-500" />

            <span className="text-lg">
              Favorite Movies
            </span>

          </div>

          <span>→</span>
        </Link>

        <Link
          href="/profile/history"
          className="flex items-center justify-between bg-zinc-900 p-5 rounded-2xl hover:bg-zinc-800 transition"
        >
          <div className="flex items-center gap-4">

            <History className="text-blue-400" />

            <span className="text-lg">
              Watch History
            </span>

          </div>

          <span>→</span>
        </Link>

        <Link
          href="/profile/settings"
          className="flex items-center justify-between bg-zinc-900 p-5 rounded-2xl hover:bg-zinc-800 transition"
        >
          <div className="flex items-center gap-4">

            <Settings className="text-yellow-400" />

            <span className="text-lg">
              Account Settings
            </span>

          </div>

          <span>→</span>
        </Link>

      </div>

      {/* LOGOUT */}
      <button
        onClick={() =>
          signOut({
            callbackUrl: "/",
          })
        }
        className="w-full mt-10 bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3"
      >
        <LogOut size={20} />
        Logout
      </button>

    </main>
  );
}