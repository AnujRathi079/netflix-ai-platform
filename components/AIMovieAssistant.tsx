"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

type Message = {
  role: "user" | "bot";

  text: string;
};

export default function AIMovieAssistant() {

  const router = useRouter();

  const [open, setOpen] =
    useState(false);

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState<Message[]>([
      {
        role: "bot",

        text:
          "🎬 Welcome to Cinema AI. Ask for recommendations or use voice commands.",
      },
    ]);

  // CLEAR CHAT
  const clearChat = () => {

    setMessages([
      {
        role: "bot",

        text:
          "🎬 Chat refreshed. Ask me about movies.",
      },
    ]);
  };

  // SEND MESSAGE
  const sendMessage =
    async () => {

      if (!input.trim())
        return;

      const userMessage = {
        role: "user" as const,

        text: input,
      };

      setMessages(
        (prev: Message[]) => [
          ...prev,
          userMessage,
        ]
      );

      const currentInput =
        input;

      setInput("");

      try {

        setLoading(true);

        const res =
          await fetch(
            "/api/ai-movies",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                message:
                  currentInput,
              }),
            }
          );

        const data =
          await res.json();

        setMessages(
          (prev: Message[]) => [
            ...prev,
            {
              role: "bot",

              text:
                data.reply,
            },
          ]
        );

      } catch (error) {

        console.log(error);

        setMessages(
          (prev: Message[]) => [
            ...prev,
            {
              role: "bot",

              text:
                "⚠ Something went wrong.",
            },
          ]
        );

      } finally {

        setLoading(false);
      }
    };

  // VOICE COMMAND
  const startVoiceCommand =
    () => {

      try {

        const SpeechRecognition =
          (window as any)
            .webkitSpeechRecognition ||
          (window as any)
            .SpeechRecognition;

        if (
          !SpeechRecognition
        ) {

          setMessages(
            (prev: Message[]) => [
              ...prev,
              {
                role: "bot",

                text:
                  "⚠ Voice recognition is not supported.",
              },
            ]
          );

          return;
        }

        const recognition =
          new SpeechRecognition();

        recognition.lang =
          "en-US";

        recognition.continuous =
          false;

        recognition.interimResults =
          false;

        recognition.start();

        // LISTENING
        setMessages(
          (prev: Message[]) => [
            ...prev,
            {
              role: "bot",

              text:
                "🎤 Listening...",
            },
          ]
        );

        // RESULT
        recognition.onresult = (
          event: any
        ) => {

          const transcript =
            event.results[0][0]
              .transcript;

          const command =
            transcript
              .toLowerCase()
              .trim();

          // USER MESSAGE
          setMessages(
            (prev: Message[]) => [
              ...prev,
              {
                role: "user",

                text:
                  transcript,
              },
            ]
          );

          // SEARCH
          if (
            command.startsWith(
              "search"
            )
          ) {

            const query =
              command.replace(
                "search",
                ""
              );

            router.push(
              `/search/${query.trim()}`
            );

            return;
          }

          // PLAY
          if (
            command.startsWith(
              "play"
            )
          ) {

            const query =
              command.replace(
                "play",
                ""
              );

            router.push(
              `/search/${query.trim()}`
            );

            return;
          }

          // FAVORITES
          if (
            command.includes(
              "favorites"
            )
          ) {

            router.push(
              "/favorites"
            );

            return;
          }

          // HOME
          if (
            command.includes(
              "home"
            )
          ) {

            router.push("/");

            return;
          }

          // UNKNOWN
          setMessages(
            (prev: Message[]) => [
              ...prev,
              {
                role: "bot",

                text:
                  `🤖 You said: "${transcript}"`,
              },
            ]
          );
        };

        // ERROR
        recognition.onerror = (
          event: any
        ) => {

          console.log(
            "VOICE ERROR:",
            event.error
          );

          // NO SPEECH
          if (
            event.error ===
            "no-speech"
          ) {

            setMessages(
              (prev: Message[]) => [
                ...prev,
                {
                  role: "bot",

                  text:
                    "🎤 I didn't hear anything.",
                },
              ]
            );

            return;
          }

          // MIC BLOCKED
          if (
            event.error ===
            "not-allowed"
          ) {

            setMessages(
              (prev: Message[]) => [
                ...prev,
                {
                  role: "bot",

                  text:
                    "⚠ Please allow microphone access.",
                },
              ]
            );

            return;
          }

          // OTHER ERROR
          setMessages(
            (prev: Message[]) => [
              ...prev,
              {
                role: "bot",

                text:
                  `⚠ Voice Error: ${event.error}`,
              },
            ]
          );
        };

      } catch (error) {

        console.log(error);

        setMessages(
          (prev: Message[]) => [
            ...prev,
            {
              role: "bot",

              text:
                "⚠ Voice system crashed.",
            },
          ]
        );
      }
    };

  return (
    <>
      {/* FLOAT BUTTON */}
      {!open && (
        <button
          onClick={() =>
            setOpen(true)
          }
          className="fixed bottom-8 right-8 z-[999] w-20 h-20 rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 shadow-[0_0_40px_rgba(255,0,100,0.7)] flex items-center justify-center text-3xl hover:scale-110 transition duration-300 animate-pulse"
        >
          🤖
        </button>
      )}

      {/* AI PANEL */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6">

          <div className="w-full max-w-5xl h-[85vh] bg-zinc-950/95 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">

            {/* HEADER */}
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-700 px-8 py-5 flex items-center justify-between">

              <div>
                <h1 className="text-3xl font-bold text-white">
                  Cinema AI
                </h1>

                <p className="text-zinc-200 text-sm mt-1">
                  Your intelligent movie universe
                </p>
              </div>

              <div className="flex gap-3">

                <button
                  onClick={
                    clearChat
                  }
                  className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-white text-sm"
                >
                  Refresh
                </button>

                <button
                  onClick={() =>
                    setOpen(false)
                  }
                  className="text-white text-2xl"
                >
                  ✕
                </button>

              </div>
            </div>

            {/* CHAT AREA */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-gradient-to-b from-black to-zinc-950">

              {messages.map(
                (
                  msg,
                  index
                ) => (

                  <div
                    key={index}
                    className={`max-w-[75%] px-6 py-4 rounded-3xl text-base leading-relaxed shadow-xl ${
                      msg.role ===
                      "user"
                        ? "ml-auto bg-gradient-to-r from-red-600 to-pink-600 text-white"
                        : "bg-zinc-900 text-zinc-200 border border-zinc-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                )
              )}

              {/* LOADING */}
              {loading && (
                <div className="bg-zinc-900 text-zinc-300 border border-zinc-800 px-6 py-4 rounded-3xl w-fit animate-pulse">
                  Cinema AI is thinking...
                </div>
              )}
            </div>

            {/* INPUT AREA */}
            <div className="border-t border-zinc-800 bg-black/70 p-5 flex gap-4">

              <input
                type="text"
                value={input}
                onChange={(e) =>
                  setInput(
                    e.target.value
                  )
                }
                onKeyDown={(e) => {

                  if (
                    e.key ===
                    "Enter"
                  ) {

                    sendMessage();
                  }
                }}
                placeholder="Ask Cinema AI..."
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-red-500 transition"
              />

              {/* VOICE BUTTON */}
              <button
                onClick={
                  startVoiceCommand
                }
                className="bg-zinc-800 hover:bg-zinc-700 transition px-5 rounded-2xl text-white text-xl"
              >
                🎤
              </button>

              {/* SEND BUTTON */}
              <button
                onClick={
                  sendMessage
                }
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:scale-105 transition px-8 rounded-2xl text-white font-bold shadow-lg"
              >
                Send
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}