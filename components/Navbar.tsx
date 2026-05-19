"use client";

import { Search, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/90 to-transparent">

      <div className="flex items-center justify-between px-4 md:px-10 py-4">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* NETFLIX LOGO */}
          <h1 className="text-red-600 font-extrabold text-2xl md:text-4xl tracking-wider">
            NETFLIX
          </h1>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* SEARCH */}
          <div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2">

            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm px-2 w-32 md:w-48"
            />

          </div>

          {/* MOBILE SEARCH ICON */}
          <button className="sm:hidden">
            <Search size={22} />
          </button>

          {/* NOTIFICATION */}
          <Bell size={22} className="cursor-pointer" />

          {/* PROFILE */}
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-9 h-9 rounded-md border border-zinc-700"
          />

        </div>

      </div>

    </header>
  );
}