"use client";

import { signIn } from "next-auth/react";

import {
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

export default function SignInFormClient() {

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1974&auto=format&fit=crop"
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* GLOW EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/20 blur-[140px] rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* CARD */}
      <div className="relative z-20 w-[420px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-[0_0_60px_rgba(255,0,0,0.3)]">

        {/* LOGO */}
        <h1 className="text-5xl font-extrabold text-red-600 text-center tracking-widest">
          NETFLIX AI
        </h1>

        <p className="text-center text-zinc-400 mt-4 mb-10">
          Your cinematic universe powered by AI
        </p>

        {/* GOOGLE */}
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "/",
            })
          }
          className="w-full flex items-center justify-center gap-4 bg-white text-black font-semibold py-4 rounded-2xl hover:scale-105 transition duration-300 shadow-lg"
        >
          <FaGoogle size={22} />

          Continue with Google
        </button>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 my-8">

          <div className="flex-1 h-[1px] bg-zinc-700" />

          <span className="text-zinc-500 text-sm">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-zinc-700" />
        </div>

        {/* GITHUB */}
        <button
          onClick={() =>
            signIn("github", {
              callbackUrl: "/",
            })
          }
          className="w-full flex items-center justify-center gap-4 bg-zinc-900 text-white font-semibold py-4 rounded-2xl border border-zinc-700 hover:bg-zinc-800 transition duration-300"
        >
          <FaGithub size={24} />

          Continue with GitHub
        </button>

        {/* FOOTER */}
        <p className="text-center text-zinc-500 text-sm mt-10 leading-relaxed">
          Secure authentication powered by
          NextAuth.js
        </p>
      </div>
    </div>
  );
}