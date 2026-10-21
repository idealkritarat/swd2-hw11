"use client";

import { useEffect, useRef } from "react";

type VideoPlayerProps = {
  vdoSrc: string;
  isPlaying: boolean;
};

export default function VideoPlayer({ vdoSrc, isPlaying }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      // A browser can reject playback if the user has paused or left the page.
      video.play()?.catch(() => {});
    } else {
      video.pause();
    }
  }, [isPlaying, vdoSrc]);

  return (
    <video
      ref={videoRef}
      src={vdoSrc}
      muted
      loop
      playsInline
      aria-label="Venue promotion"
      className="aspect-video w-full rounded-xl bg-slate-950 object-cover"
    />
  );
}
