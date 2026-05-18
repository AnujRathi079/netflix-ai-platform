"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search/${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2"
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-zinc-900 text-white px-4 py-2 rounded outline-none w-[250px]"
      />

      <button
        type="submit"
        className="bg-red-600 px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
}