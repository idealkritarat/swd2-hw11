import { Suspense } from "react";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default function VenuePage() {
  const venues = getVenues();

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-100 to-slate-50 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-slate-900">
          Choose your venue
        </h1>
        <Suspense fallback={<p className="text-center">Loading venues...</p>}>
          <VenueCatalog venuesJson={venues} />
        </Suspense>
      </div>
    </main>
  );
}
