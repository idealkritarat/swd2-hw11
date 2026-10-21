"use client";

import Rating from "@mui/material/Rating";
import Image from "next/image";
import Link from "next/link";
import InteractiveCard from "./InteractiveCard";

type CardProps = {
  vid: string;
  venueName: string;
  imgSrc: string;
  rating?: number;
  onRatingChange?: (rating: number) => void;
};

export default function Card({
  vid,
  venueName,
  imgSrc,
  rating,
  onRatingChange,
}: CardProps) {
  return (
    <InteractiveCard>
      <Link href={`/venue/${vid}`} className="group block">
        <Image
          src={imgSrc}
          alt={venueName}
          width={480}
          height={320}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <h2 className="px-5 py-5 text-xl font-bold text-slate-900 transition group-hover:text-blue-700">
          {venueName}
        </h2>
      </Link>
      {rating !== undefined && onRatingChange && (
        <div className="px-5 pb-5">
          <Rating
            id={`${venueName} Rating`}
            name={`${venueName} Rating`}
            data-testid={`${venueName} Rating`}
            value={rating}
            onChange={(_event, newValue) => {
              onRatingChange(newValue ?? 0);
            }}
          />
        </div>
      )}
    </InteractiveCard>
  );
}
