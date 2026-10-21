import TopMenuItem from "./TopMenuItem";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-800 bg-slate-950 px-5 text-white">
      <div className="flex w-full items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          {session ? (
            <Link href="/api/auth/signout" className="text-sm font-bold text-amber-400 underline-offset-4 hover:underline">
              Sign-Out of {session.user?.name}
            </Link>
          ) : (
            <Link href="/api/auth/signin" className="text-sm font-bold text-amber-400 underline-offset-4 hover:underline">
              Sign-In
            </Link>
          )}
          <TopMenuItem title="My Booking" pageRef="/mybooking" />
        </div>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-1">
            <TopMenuItem title="Venues" pageRef="/venue" />
            <TopMenuItem title="Booking" pageRef="/booking" />
          </nav>
          <Link href="/" className="flex items-center gap-2 text-base font-bold tracking-wide">
            <Image src="/img/logo.png" alt="Venue Explorer logo" width={40} height={40} className="h-10 w-auto" />
            Venue Explorer
          </Link>
        </div>
      </div>
    </header>
  );
}
