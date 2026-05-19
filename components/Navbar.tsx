"use client";

import { useState } from "react";
import { Search, Bell, X } from "lucide-react";

export default function Navbar() {

  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/90 to-transparent">

      <div className="flex items-center justify-between px-4 py-4">

        {/* LOGO */}
        <h1 className="text-red-600 font-extrabold text-2xl tracking-wider">
          NETFLIX
        </h1>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* SEARCH ICON */}
          <button
            onClick={() =>
              setShowSearch(!showSearch)
            }
          >
            {showSearch ? (
              <X size={24} />
            ) : (
              <Search size={24} />
            )}
          </button>

          {/* BELL */}
          <Bell size={22} />

          {/* PROFILE */}
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-9 h-9 rounded-md"
          />

        </div>

      </div>

      {/* SEARCH BAR */}
      {showSearch && (
        <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-2">

          <input
            type="text"
            placeholder="Search movies..."
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 outline-none text-white"
          />

        </div>
      )}

    </header>
  );
}