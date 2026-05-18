"use client";

import {
  useEffect,
  useState,
} from "react";

const profiles = [
  {
    name: "Anuj",

    role: "Main Profile",

    avatar:
      "https://i.pravatar.cc/300?img=12",

    color:
      "from-red-500 to-orange-500",
  },

  {
    name: "Kids",

    role: "Safe Mode",

    avatar:
      "https://i.pravatar.cc/300?img=5",

    color:
      "from-cyan-500 to-blue-500",
  },

  {
    name: "Guest",

    role: "Temporary Access",

    avatar:
      "https://i.pravatar.cc/300?img=15",

    color:
      "from-purple-500 to-pink-500",
  },
];

export default function ProfileSelector() {

  const [selected, setSelected] =
    useState("");

  const [open, setOpen] =
    useState(false);

  useEffect(() => {

    const saved =
      localStorage.getItem(
        "netflix-profile"
      );

    if (saved) {
      setSelected(saved);
      setOpen(false);
    } else {
      setOpen(true);
    }

  }, []);

  const chooseProfile = (
    name: string
  ) => {

    localStorage.setItem(
      "netflix-profile",
      name
    );

    setSelected(name);

    setOpen(false);

    window.location.reload();
  };

  // SMALL CURRENT PROFILE BUTTON
  if (!open) {
    return (
      <button
        onClick={() =>
          setOpen(true)
        }
        className="fixed top-24 right-8 z-50 bg-black/70 backdrop-blur-md border border-zinc-700 px-4 py-2 rounded-full text-white hover:scale-105 transition"
      >
        👤 {selected}
      </button>
    );
  }

  // FULLSCREEN PROFILE HUB
  return (
    <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center">

      {/* TITLE */}
      <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
        Who's Watching?
      </h1>

      <p className="text-zinc-400 text-lg mb-16">
        Select your cinematic profile
      </p>

      {/* PROFILE GRID */}
      <div className="flex flex-wrap justify-center gap-12">

        {profiles.map((profile) => (

          <button
            key={profile.name}
            onClick={() =>
              chooseProfile(
                profile.name
              )
            }
            className="group"
          >

            <div
              className={`relative w-56 h-72 rounded-3xl overflow-hidden bg-gradient-to-br ${profile.color} p-[2px] transition duration-500 group-hover:scale-105 group-hover:-translate-y-2`}
            >

              {/* INNER CARD */}
              <div className="w-full h-full bg-zinc-950 rounded-3xl flex flex-col items-center justify-center">

                {/* AVATAR */}
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl mb-6"
                />

                {/* NAME */}
                <h2 className="text-white text-3xl font-bold">
                  {profile.name}
                </h2>

                {/* ROLE */}
                <p className="text-zinc-400 mt-2">
                  {profile.role}
                </p>

              </div>
            </div>

          </button>
        ))}
      </div>

      {/* FOOTER */}
      <p className="absolute bottom-10 text-zinc-600 text-sm tracking-widest">
        CINEMA OS EXPERIENCE
      </p>
    </div>
  );
}