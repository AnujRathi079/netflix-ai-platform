"use client";

type Props = {
  selected: number;

  setSelected: (id: number) => void;
};

const genres = [
  {
    id: 28,
    name: "Action",
  },

  {
    id: 35,
    name: "Comedy",
  },

  {
    id: 27,
    name: "Horror",
  },

  {
    id: 10749,
    name: "Romance",
  },
];

export default function GenreFilter({
  selected,
  setSelected,
}: Props) {
  return (
    <div className="flex gap-4 flex-wrap mb-8">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() =>
            setSelected(genre.id)
          }
          className={`px-4 py-2 rounded ${
            selected === genre.id
              ? "bg-red-600"
              : "bg-zinc-800"
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}