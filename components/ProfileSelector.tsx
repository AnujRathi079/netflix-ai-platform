"use client";

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

export default function ProfileSelector() {
  return (
  <div className="pt-20 pb-4 text-center">

    <h1 className="text-2xl font-bold mb-5">
      Who's Watching?
    </h1>

    <div className="flex justify-center gap-4">

      {profiles.map((profile) => (
        <div
          key={profile.name}
          className="cursor-pointer group"
        >
          <img
            src={profile.image}
            alt={profile.name}
            className="w-20 h-20 rounded-xl object-cover border-2 border-transparent group-hover:border-white transition"
          />

          <p className="mt-2 text-sm text-gray-300 group-hover:text-white">
            {profile.name}
          </p>
        </div>
      ))}

    </div>

  </div>
);
}