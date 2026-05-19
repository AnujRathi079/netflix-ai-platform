"use client";

import { Home, Search, User, Bot } from "lucide-react";

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-md border-t border-zinc-800 flex justify-around py-3 md:hidden z-50">

      <button className="flex flex-col items-center text-white">
        <Home size={20} />
        <span className="text-xs">Home</span>
      </button>

      <button className="flex flex-col items-center text-white">
        <Search size={20} />
        <span className="text-xs">Search</span>
      </button>

      <button className="flex flex-col items-center text-white">
        <Bot size={20} />
        <span className="text-xs">AI</span>
      </button>

      <button className="flex flex-col items-center text-white">
        <User size={20} />
        <span className="text-xs">Profile</span>
      </button>

    </div>
  );
}