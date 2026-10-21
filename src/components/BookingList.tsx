"use client";

import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";
import type { AppDispatch, RootState } from "@/redux/store";

const venueNames: Record<string, string> = {
  Bloom: "The Bloom Pavilion",
  Spark: "Spark Space",
  GrandTable: "The Grand Table",
};

export default function BookingList() {
  const bookItems = useSelector((state: RootState) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();

  if (bookItems.length === 0) {
    return <p className="text-center text-lg font-medium text-slate-500">No Venue Booking</p>;
  }

  return (
    <div className="space-y-4">
      {bookItems.map((item) => (
        <div
          key={`${item.venue}-${item.bookDate}`}
          className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-5 text-slate-700 sm:flex-row sm:items-center sm:justify-between"
        >
          <dl className="grid gap-2 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <dt className="text-sm font-semibold">Name-Lastname</dt>
              <dd>{item.nameLastname}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold">Contact-Number</dt>
              <dd>{item.tel}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold">Venue</dt>
              <dd>{venueNames[item.venue] ?? item.venue}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold">Booking Date</dt>
              <dd>{item.bookDate}</dd>
            </div>
          </dl>
          <Button
            variant="outlined"
            color="error"
            sx={{ borderRadius: 999, px: 3 }}
            onClick={() => dispatch(removeBooking(item))}
          >
            Cancel Booking
          </Button>
        </div>
      ))}
    </div>
  );
}
