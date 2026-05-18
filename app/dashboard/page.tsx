"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <img
        src={session?.user?.image || ""}
        alt="profile"
        className="w-24 h-24 rounded-full"
      />

      <h2 className="text-2xl">
        {session?.user?.name}
      </h2>

      <p>{session?.user?.email}</p>

      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-5 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}