import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ListingItem } from "./listing-card";

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

const LatestEvents = () => {
  return (
    <section className="bg-[#010812] py-24 text-white md:px-4">
      <div className="container flex flex-col items-center gap-8">
        {/* Row */}
        <div className="flex w-full items-center justify-between gap-4 max-md:px-4">
          <h2 className="text-2xl font-semibold">Video ERA</h2>
        </div>

        {/* Row */}
        <ul className="scrollbar-none container flex overflow-hidden overflow-x-scroll sm:gap-6 md:gap-8">
          {fakeData?.map((item) => (
            <li
              key={item.id}
              className="h-full w-4/5 shrink-0 max-md:pl-4 sm:w-1/2 md:flex-1"
            >
              <ListingItem {...item} />
            </li>
          ))}
          <li className="flex pl-4 md:hidden"></li>
        </ul>

        {/* Row */}
        <Link
          href="/"
          aria-label="Lebih Banyak"
          className="flex items-center justify-center gap-2 text-center text-sm font-medium underline underline-offset-4"
        >
          Lebih Banyak
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default LatestEvents;
