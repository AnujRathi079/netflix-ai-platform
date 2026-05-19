"use client";

import { useState } from "react";

import {
  Search,
  Bell,
  X,
} from "lucide-react";

import { useRouter } from "next/navigation";

import ProfileSidebar from "./ProfileSidebar";

export default function Navbar() {

  const router = useRouter();

  const [showSearch, setShowSearch] =
    useState(false);

  const [openSidebar, setOpenSidebar] =
    useState(false);

  const [search, setSearch] =
    useState("");

  // SEARCH FUNCTION
  const handleSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {

    if (
      e.key === "Enter"
    ) {

      const trimmed =
        search.trim();

      // PREVENT EMPTY SEARCH
      if (!trimmed) return;

      // REDIRECT
      router.push(
        `/search/${encodeURIComponent(trimmed)}`
      );

      // CLOSE SEARCH
      setShowSearch(false);

      // CLEAR INPUT
      setSearch("");
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/95 to-transparent backdrop-blur-sm">

        {/* TOP NAV */}
        <div className="flex items-center justify-between px-4 py-4">

          {/* LOGO */}
          <h1
            onClick={() =>
              router.push("/")
            }
            className="text-red-600 font-extrabold text-2xl md:text-3xl tracking-wider cursor-pointer select-none"
          >
            NETFLIX
          </h1>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* SEARCH ICON */}
            <button
              onClick={() =>
                setShowSearch(
                  !showSearch
                )
              }
              className="hover:scale-110 transition"
            >
              {showSearch ? (
                <X size={24} />
              ) : (
                <Search size={24} />
              )}
            </button>

            {/* NOTIFICATION */}
            <button
              onClick={() =>
                setOpenSidebar(true)
              }
              className="hover:scale-110 transition"
            >
              <Bell size={22} />
            </button>

            {/* PROFILE */}
            <button
              onClick={() =>
                router.push(
                  "/profile"
                )
              }
            >
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-9 h-9 rounded-md border border-zinc-700 object-cover"
              />
            </button>

          </div>

        </div>

        {/* SEARCH BAR */}
        {showSearch && (

          <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-2">

            <input
              autoFocus
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              onKeyDown={
                handleSearch
              }
              placeholder="Search movies..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none text-white placeholder:text-gray-400"
            />

          </div>

        )}

      </header>

      {/* PROFILE SIDEBAR */}
      <ProfileSidebar
        open={openSidebar}
        onClose={() =>
          setOpenSidebar(false)
        }
      />
    </>
  );
}