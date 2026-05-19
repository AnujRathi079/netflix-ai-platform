"use client";

import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const profiles = [
  {
    name: "You",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Kids",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Guest",
    image: "https://i.pravatar.cc/150?img=22",
  },
];

export default function ProfileSidebar({
  open,
  onClose,
}: Props) {

  return (
    <>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-zinc-950 z-50 transform transition-transform duration-300 border-l border-zinc-800 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* TOP */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">

          <h2 className="text-xl font-bold">
            Profile
          </h2>

          <button onClick={onClose}>
            <X size={24} />
          </button>

        </div>

        {/* WHO'S WATCHING */}
        <div className="p-5">

          <h3 className="text-lg font-semibold mb-5">
            Who's Watching?
          </h3>

          <div className="space-y-4">

            {profiles.map((profile) => (
              <div
                key={profile.name}
                className="flex items-center gap-4 cursor-pointer hover:bg-zinc-900 p-2 rounded-lg transition"
              >

                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-14 h-14 rounded-lg object-cover"
                />

                <span className="text-lg">
                  {profile.name}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* NOTIFICATIONS */}
        <div className="p-5 border-t border-zinc-800">

          <h3 className="text-lg font-semibold mb-4">
            Notifications
          </h3>

          <div className="space-y-3 text-sm text-gray-300">

            <p>🔥 New trending movies added</p>

            <p>🎬 AI recommendations ready</p>

            <p>🍿 Continue watching available</p>

          </div>

        </div>

        {/* FOOTER */}
        <div className="absolute bottom-0 w-full p-5 border-t border-zinc-800">

          <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition">
            Logout
          </button>

        </div>

      </div>

    </>
  );
}