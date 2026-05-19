import AIMovieAssistant from "@/components/AIMovieAssistant";

export default function AIPage() {

  return (
    <main className="bg-black min-h-screen text-white pt-24 px-4">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          AI Movie Assistant
        </h1>

        <p className="text-zinc-400 mt-2">
          Ask AI for recommendations
        </p>

      </div>

      <AIMovieAssistant />

    </main>
  );
}