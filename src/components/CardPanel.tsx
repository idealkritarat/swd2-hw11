"use client";

import { useReducer } from "react";
import Card from "@/components/Card";

type Venue = {
  vid: string;
  venueName: string;
  imgSrc: string;
};

const venues: Venue[] = [
  { vid: "001", venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
  { vid: "002", venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg" },
  { vid: "003", venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg" },
];

type RatingsMap = Map<string, number>;

type RatingAction =
  | { type: "SET_RATING"; venueName: string; rating: number }
  | { type: "REMOVE_VENUE"; venueName: string };

function ratingsReducer(state: RatingsMap, action: RatingAction): RatingsMap {
  const next = new Map(state);
  switch (action.type) {
    case "SET_RATING":
      next.set(action.venueName, action.rating);
      return next;
    case "REMOVE_VENUE":
      next.delete(action.venueName);
      return next;
    default:
      return state;
  }
}

function initRatings(venueList: Venue[]): RatingsMap {
  return new Map(venueList.map((venue) => [venue.venueName, 0]));
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingsReducer, venues, initRatings);

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-100 to-slate-50 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Choose your venue</h1>
        </div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {venues.map((venue) => (
          <Card
            key={venue.vid}
            vid={venue.vid}
            venueName={venue.venueName}
            imgSrc={venue.imgSrc}
            rating={ratings.get(venue.venueName) ?? 0}
            onRatingChange={(rating) =>
              dispatch({ type: "SET_RATING", venueName: venue.venueName, rating })
            }
          />
        ))}
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
        <h3 className="text-sm font-bold tracking-wide text-slate-700 uppercase">
          Venue List with Ratings : {ratings.size}
        </h3>
        <ul>
          {Array.from(ratings.entries()).map(([venueName, rating]) => (
            <li
              key={venueName}
              data-testid={venueName}
              onClick={() => dispatch({ type: "REMOVE_VENUE", venueName })}
              className="cursor-pointer border-t border-slate-100 py-2 text-slate-600 transition hover:text-blue-700"
            >
              {venueName} Rating : {rating}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
