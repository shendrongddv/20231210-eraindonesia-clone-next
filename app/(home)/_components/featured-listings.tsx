import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 4 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

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
    <section className="bg-slate-100 py-24">
      <div className="container flex flex-col items-center gap-12 md:px-6">
        {/* Row */}
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
          <h2 className="text-2xl font-semibold">Featured Listings</h2>
          <span>Search</span>
        </div>

        {/* Row */}
        <ScrollArea className="w-full">
          <div className="container flex overflow-hidden">
            {fakeData.map((item) => (
              <>
                <div key={item.id} className="w-full shrink-0 px-4">
                  <ListingItem {...item} />
                </div>
              </>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* Row */}
        <ul className="scrollbar-thumb-rounded-full scrollbar-track-transparent scrollbar-thumb-transparent scrollbar-h-4 scrollbar-thin md:scrollbar-thumb-transparent hover:scrollbar-thumb-slate-200 container flex overflow-hidden overflow-x-scroll pb-4 transition-colors">
          {fakeData?.map((item) => (
            <li
              key={item.id}
              className="h-full w-4/5 shrink-0 pl-4 sm:w-1/2 md:w-1/4"
            >
              <ListingItem {...item} />
            </li>
          ))}
          <li className="pl-4"></li>
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

export default FeaturedListings;

type ListingItemProps = {
  title: string;
  image: string;
  url: string;
};

const ListingItem = ({ title, image, url }: ListingItemProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-4 text-center">
      <figure aria-hidden className="aspect-1 h-auto w-full overflow-hidden">
        <Image
          src={`/${image}`}
          alt={title}
          width={480}
          height={480}
          className="h-full w-auto object-cover"
        />
      </figure>
      <span className="text-sm">{title}</span>
    </div>
  );
};
