"use client";

import { FormEvent, useState } from "react";
import { Box, Button } from "@mui/material";
import { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import DateReserve from "@/components/DateReserve";
import { addBooking } from "@/redux/features/bookSlice";
import type { AppDispatch } from "@/redux/store";

export default function BookingPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("");
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);
  const [message, setMessage] = useState("");

  const makeBooking = (e: FormEvent) => {
    e.preventDefault();
    if (!nameLastname || !tel || !venue || !bookDate) {
      setMessage("Please fill in every field.");
      return;
    }
    dispatch(
      addBooking({
        nameLastname,
        tel,
        venue,
        bookDate: bookDate.format("YYYY/MM/DD"),
      })
    );
    setMessage("Venue booked. See it in My Booking.");
  };

  return (
    <main className="grid min-h-[calc(100vh-4rem)] place-items-center bg-slate-100 px-5 py-12 text-slate-900 sm:px-8">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-7 shadow-xl shadow-slate-300/60 sm:p-10">
        <h1 className="text-4xl font-bold tracking-tight">Venue Booking</h1>
        <Box component="form" className="mt-8 space-y-8" onSubmit={makeBooking}>
          <DateReserve
            nameLastname={nameLastname}
            tel={tel}
            venue={venue}
            bookDate={bookDate}
            onNameChange={setNameLastname}
            onTelChange={setTel}
            onVenueChange={setVenue}
            onDateChange={setBookDate}
          />
          <div className="flex items-center justify-end gap-4 pt-2">
            {message ? <p className="text-sm text-slate-600">{message}</p> : null}
            <Button name="Book Venue" type="submit" variant="contained" sx={{ borderRadius: 999, px: 3, py: 1.25, bgcolor: "#0f172a" }}>
              Book Venue
            </Button>
          </div>
        </Box>
      </section>
    </main>
  );
}
