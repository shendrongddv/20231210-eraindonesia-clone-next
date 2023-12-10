import { ChevronRight } from "lucide-react";
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

const LatestEvents = () => {
  return (
    <section className="bg-[#010812] py-24 text-white">
      <div className="container flex flex-col items-center gap-12 px-6">
        {/* Row */}
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
          <h2 className="text-2xl font-semibold">Video ERA</h2>
          <span>Search</span>
        </div>

        {/* Row */}
        <ul className="grid w-full gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-4">
          {fakeData?.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center gap-4 text-center"
            >
              <figure
                aria-hidden
                className="aspect-1 h-auto w-full overflow-hidden"
              >
                <Image
                  src={`/${item.image}`}
                  alt={item.title}
                  width={480}
                  height={480}
                  className="h-full w-auto object-cover"
                />
              </figure>
              <span className="text-sm">{item.title}</span>
            </li>
          ))}
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
