"use client";

import Link from "next/link";

import {
  Home,
  Search,
  Bot,
  User,
} from "lucide-react";

export default function MobileNav() {

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-zinc-800 flex justify-around py-3 z-50 md:hidden">

      <Link
        href="/"
        className="flex flex-col items-center text-white"
      >
        <Home size={22} />
        <span className="text-xs mt-1">
          Home
        </span>
      </Link>

      <Link
        href="/search/batman"
        className="flex flex-col items-center text-white"
      >
        <Search size={22} />
        <span className="text-xs mt-1">
          Search
        </span>
      </Link>

      <Link
        href="/ai"
        className="flex flex-col items-center text-white"
      >
        <Bot size={22} />
        <span className="text-xs mt-1">
          AI
        </span>
      </Link>

      <Link
        href="/profile"
        className="flex flex-col items-center text-white"
      >
        <User size={22} />
        <span className="text-xs mt-1">
          Profile
        </span>
      </Link>

    </div>
  );
}