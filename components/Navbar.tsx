"use client";

import { useState } from "react";

import {
  Search,
  Bell,
  X,
} from "lucide-react";

import ProfileSidebar from "./ProfileSidebar";

import { useRouter } from "next/navigation";

export default function Navbar() {

  const [showSearch, setShowSearch] =
    useState(false);

  const [openSidebar, setOpenSidebar] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const router = useRouter();

  const handleSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {

    if (
      e.key === "Enter" &&
      search.trim()
    ) {

      router.push(
        `/search/${search}`
      );

      setShowSearch(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/90 to-transparent">

        {/* TOP */}
        <div className="flex items-center justify-between px-4 py-4">

          {/* LOGO */}
          <h1
            onClick={() =>
              router.push("/")
            }
            className="text-red-600 font-extrabold text-2xl tracking-wider cursor-pointer"
          >
            NETFLIX
          </h1>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* SEARCH */}
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

            {/* BELL */}
            <button
              onClick={() =>
                setOpenSidebar(true)
              }
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
                className="w-9 h-9 rounded-md border border-zinc-700"
              />
            </button>

          </div>

        </div>

        {/* SEARCH BAR */}
        {showSearch && (
          <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-2">

            <input
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

      {/* SIDEBAR */}
      <ProfileSidebar
        open={openSidebar}
        onClose={() =>
          setOpenSidebar(false)
        }
      />
    </>
  );
}