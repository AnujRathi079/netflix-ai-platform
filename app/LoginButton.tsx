"use client";

import { signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="logout-wrapper">
      <button onClick={() => signOut()} className="logout-btn">
        Logout
      </button>
    </div>
  );
}