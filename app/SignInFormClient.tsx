"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SignInFormClient() {
  return (
    <div className="login-page">
      <div className="background-overlay"></div>

      <div className="navbar">
        <h1 className="logo">NETFLIX</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="login-card"
      >
        <h2>Sign In</h2>

        <p className="subtitle">
          Continue with your account provider
        </p>

        <div className="button-group">

          {/* Google Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => signIn("google")}
            className="google-btn"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="google"
              width={20}
              height={20}
            />

            Continue with Google
          </motion.button>

          {/* GitHub Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => signIn("github")}
            className="github-btn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
              width={20}
              height={20}
            />

            Continue with GitHub
          </motion.button>
        </div>

        <p className="secure-text">
          Secure Authentication using NextAuth
        </p>
      </motion.div>
    </div>
  );
}