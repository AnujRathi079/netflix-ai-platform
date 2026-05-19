import AIMovieAssistant from "@/components/AIMovieAssistant";

export default function AIPage() {

  return (
    <main className="bg-black min-h-screen text-white pt-24 px-4">

      <h1 className="text-3xl font-bold mb-6">
        AI Assistant
      </h1>

      <AIMovieAssistant />

    </main>
  );
}