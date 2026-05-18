"use client";

import dynamic from "next/dynamic";

import { X } from "lucide-react";

const ReactPlayer = dynamic(
  () => import("react-player"),
  { ssr: false }
);

type Props = {
  videoKey: string;
  onClose: () => void;
};

export default function TrailerModal({
  videoKey,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="relative w-[90%] md:w-[800px]">

        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white"
        >
          <X size={35} />
        </button>

        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoKey}`}
          controls={true}
          playing={true}
          width="100%"
          height="450px"
        />
      </div>
    </div>
  );
}