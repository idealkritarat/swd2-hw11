"use client";

import { useState } from "react";
import useWindowListener from "@/hooks/useWindowListener";
import VideoPlayer from "./VideoPlayer";

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(true);
  useWindowListener("contextmenu", (event) => event.preventDefault());

  return (
    <section className="bg-slate-100 px-6 py-12 sm:py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8 md:grid-cols-2">
        <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={isPlaying} />
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Book your venue today.
          </h2>
          <button
            type="button"
            onClick={() => setIsPlaying((playing) => !playing)}
            className="mt-6 cursor-pointer rounded-md bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </section>
  );
}
