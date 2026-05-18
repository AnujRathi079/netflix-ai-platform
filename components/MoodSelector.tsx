"use client";

const moods = [
  {
    name: "Happy 😄",
    genre: 35,
  },

  {
    name: "Romantic ❤️",
    genre: 10749,
  },

  {
    name: "Excited 🔥",
    genre: 28,
  },

  {
    name: "Horror 👻",
    genre: 27,
  },

  {
    name: "Adventure 🌍",
    genre: 12,
  },
];

type Props = {
  onSelect: (
    genre: number
  ) => void;
};

export default function MoodSelector({
  onSelect,
}: Props) {
  return (
    <div className="px-6 mt-12">

      <h1 className="text-3xl font-bold text-white mb-6">
        Choose Your Mood
      </h1>

      <div className="flex gap-4 flex-wrap">

        {moods.map((mood) => (

          <button
            key={mood.name}
            onClick={() =>
              onSelect(
                mood.genre
              )
            }
            className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-red-600 transition text-white font-medium shadow-lg"
          >
            {mood.name}
          </button>
        ))}
      </div>
    </div>
  );
}