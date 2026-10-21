import Card from "@/components/Card";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson>;
}) {
  const venues = await venuesJson;

  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {venues.data.map((venue: VenueItem) => (
        <Card
          key={venue.id}
          vid={venue.id}
          venueName={venue.name}
          imgSrc={venue.picture}
        />
      ))}
    </div>
  );
}
