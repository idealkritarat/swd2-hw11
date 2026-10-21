export type Venue = { vid: string; venueName: string; imgSrc: string };

export const venueById = new Map<string, Venue>([
  ["001", { vid: "001", venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" }],
  ["002", { vid: "002", venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg" }],
  ["003", { vid: "003", venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg" }],
]);
