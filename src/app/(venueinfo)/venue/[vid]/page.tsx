import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function VenuePage({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = await params;
  const { data: venue } = await getVenue(vid);

  return (
    <main className="grid min-h-[calc(100vh-4rem)] place-items-center bg-slate-100 px-5 py-12 text-slate-900 sm:px-8">
      <section className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-300/60">
        <Image
          src={venue.picture}
          alt={venue.name}
          width={960}
          height={640}
          sizes="(max-width: 896px) 100vw, 896px"
          className="h-72 w-full object-cover sm:h-[430px]"
        />
        <div className="p-7 sm:p-10">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">{venue.name}</h1>
          <dl className="mt-6 grid gap-4 text-slate-700 sm:grid-cols-2">
            <div>
              <dt className="font-semibold">Address</dt>
              <dd>{venue.address}</dd>
            </div>
            <div>
              <dt className="font-semibold">District</dt>
              <dd>{venue.district}</dd>
            </div>
            <div>
              <dt className="font-semibold">Province</dt>
              <dd>{venue.province}</dd>
            </div>
            <div>
              <dt className="font-semibold">Postal code</dt>
              <dd>{venue.postalcode}</dd>
            </div>
            <div>
              <dt className="font-semibold">Telephone</dt>
              <dd><a href={`tel:${venue.tel}`}>{venue.tel}</a></dd>
            </div>
            <div>
              <dt className="font-semibold">Daily rental rate</dt>
              <dd>{venue.dailyrate.toLocaleString("en-US")} THB / day</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
