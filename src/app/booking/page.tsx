import { Box, Button } from "@mui/material";
import { getServerSession } from "next-auth";
import DateReserve from "@/components/DateReserve";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);
  const profile = session?.user?.token ? (await getUserProfile(session.user.token)).data : null;

  return (
    <main className="grid min-h-[calc(100vh-4rem)] place-items-center bg-slate-100 px-5 py-12 text-slate-900 sm:px-8">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-7 shadow-xl shadow-slate-300/60 sm:p-10">
        {profile ? (
          <dl className="mb-8 grid gap-4 rounded-2xl bg-slate-50 p-5 text-slate-700 sm:grid-cols-2">
            <div>
              <dt className="font-semibold">Name</dt>
              <dd>{profile.name}</dd>
            </div>
            <div>
              <dt className="font-semibold">Email</dt>
              <dd>{profile.email}</dd>
            </div>
            <div>
              <dt className="font-semibold">Tel.</dt>
              <dd>{profile.tel}</dd>
            </div>
            <div>
              <dt className="font-semibold">Member Since</dt>
              <dd>{new Date(profile.createdAt).toLocaleDateString("en-US", { dateStyle: "long" })}</dd>
            </div>
          </dl>
        ) : null}
        <h1 className="text-4xl font-bold tracking-tight">Venue Booking</h1>
        <Box component="form" className="mt-8 space-y-8">
          <DateReserve />
          <div className="flex justify-end pt-2">
            <Button name="Book Venue" type="submit" variant="contained" sx={{ borderRadius: 999, px: 3, py: 1.25, bgcolor: "#0f172a" }}>
              Book Venue
            </Button>
          </div>
        </Box>
      </section>
    </main>
  );
}
