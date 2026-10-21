import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
  return (
    <main className="grid min-h-[calc(100vh-4rem)] place-items-center bg-slate-100 px-5 py-12 text-slate-900 sm:px-8">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-7 shadow-xl shadow-slate-300/60 sm:p-10">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">My Booking</h1>
        <BookingList />
      </section>
    </main>
  );
}
