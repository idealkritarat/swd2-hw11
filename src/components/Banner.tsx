"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";

const covers = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section
      className="relative isolate grid min-h-[calc(100vh-4rem)] cursor-pointer place-items-center overflow-hidden px-6 text-center text-white"
      onClick={() => setIndex((index + 1) % covers.length)}
    >
      <Image
        src={covers[index]}
        alt="Venue banner"
        fill
        sizes="100vw"
        className="-z-20 object-cover transition-opacity duration-500 brightness-[0.42]"
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/55" />
      {session ? (
        <p className="absolute right-6 top-5 text-lg font-semibold text-amber-300 drop-shadow">
          Welcome {session.user?.name}
        </p>
      ) : null}
      <div className="relative flex max-w-3xl flex-col items-center">
        <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">where every event finds its venue</h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-100 sm:text-lg">Discover the perfect venue for every occasion.</p>
        <button
          type="button"
          className="mt-8 cursor-pointer rounded-md bg-amber-400 px-7 py-3 font-bold text-slate-950 shadow-lg shadow-slate-950/40 transition hover:bg-amber-300"
          onClick={(event) => {
            event.stopPropagation();
            router.push("/venue");
          }}
        >
          Select Venue
        </button>
      </div>
    </section>
  );
}
