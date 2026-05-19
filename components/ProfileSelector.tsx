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
    <div className="pt-24 md:pt-32 pb-10 text-center">

      <h1 className="text-2xl md:text-5xl font-bold mb-6">        Who's Watching?
      </h1>

      <div className="flex justify-center gap-4 md:gap-10 flex-wrap">

        {profiles.map((profile) => (
          <div
            key={profile.name}
            className="cursor-pointer group"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-24 h-24 md:w-36 md:h-36 rounded-xl border-2 border-transparent group-hover:border-white transition"
            />

            <p className="mt-3 text-gray-300 group-hover:text-white">
              {profile.name}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}