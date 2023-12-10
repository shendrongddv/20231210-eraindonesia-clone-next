import {
  Bath,
  Bed,
  ChevronRight,
  Home,
  LandPlot,
  MessageSquare,
  Phone,
  Square,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fakeData = [
  {
    id: 1,
    title: 'EXPERT SERIES "Exploring Urban Transformation"',
    image: "event.webp",
    url: "/",
  },
  {
    id: 2,
    title: 'Masterclass Training "Secret Closing Strategies in Property Sales"',
    image: "event.webp",
    url: "/",
  },
  {
    id: 3,
    title: 'EXPERT SERIES "Triangle Of Success For Property Broker" ',
    image: "event.webp",
    url: "/",
  },
  {
    id: 4,
    title: 'EXPERT SERIES "ERA MOBILE 2023"',
    image: "event.webp",
    url: "/",
  },
];

const FeaturedListings = () => {
  return (
    <section className="bg-slate-100 py-24 md:px-4">
      <div className="container flex flex-col items-center gap-8">
        {/* Row */}
        <div className="flex w-full items-center justify-between gap-4 max-md:px-4">
          <h2 className="text-2xl font-semibold">Featured Listings</h2>

          <Link
            href="/"
            aria-label="Lihat Lainnya"
            className="hidden items-center justify-center gap-2 text-center text-sm font-medium underline underline-offset-4 md:flex"
          >
            Lihat Lainnya
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Row */}
        <ul className="scrollbar-none container flex overflow-hidden overflow-x-scroll sm:gap-6 md:gap-8">
          {fakeData?.map((item) => (
            <li
              key={item.id}
              className="h-full w-4/5 shrink-0 max-md:pl-4 sm:w-1/2 md:flex-1"
            >
              {/* <ListingItem {...item} /> */}
              <ListingItem />
            </li>
          ))}
          <li className="flex pl-4 md:hidden"></li>
        </ul>

        {/* Row */}
        <Link
          href="/"
          aria-label="Lihat Lainnya"
          className="flex items-center justify-center gap-2 text-center text-sm font-medium underline underline-offset-4 md:hidden"
        >
          Lihat Lainnya
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedListings;

export const ListingItem = () => {
  return (
    <div className="grid overflow-hidden rounded-xl border">
      {/* # */}
      <div className="aspect-h-9 aspect-w-16 relative isolate flex items-center justify-center overflow-hidden">
        {/* BG */}
        <Image
          src="/listing.jpg"
          alt="Image"
          width={250}
          height={188}
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* TAG */}
        <div className="z-10 h-full w-full">
          <span className="bg-red rounded-br-md p-2 text-xs text-white shadow">
            Dijual
          </span>
        </div>
      </div>

      {/* # */}
      <div className="grid gap-2 p-4">
        <h3 className="font-bold">Rumah - Menteng</h3>
        <small className="text-xs">
          Jln. Kaliabang Tengah Bekasi Utara, BEKASI
        </small>

        <div className="mt-2 flex items-center justify-between gap-4">
          <span className="flex items-center gap-1">
            <LandPlot className="h-4 w-4 text-destructive" />
            <small>900</small>
          </span>

          <span className="flex items-center gap-1">
            <Home className="h-4 w-4 text-destructive" />
            <small>800</small>
          </span>

          <span className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-destructive" />
            <small>4</small>
          </span>

          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-destructive" />
            <small>2</small>
          </span>
        </div>

        <span className="mt-2 text-lg font-bold text-destructive">
          Rp 65.000.000.000
        </span>
      </div>

      {/* # */}
      <div className="bg-blue flex items-center gap-4 p-4 text-white">
        <span className="text-sm">Kurniawati Felicia</span>

        <Link href="/" aria-label="Phone" className="ml-auto">
          <Phone className="h-4 w-4" />
        </Link>

        <Link href="/" aria-label="Phone">
          <MessageSquare className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};
