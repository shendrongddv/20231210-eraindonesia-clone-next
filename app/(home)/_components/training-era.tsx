import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fakeData = [
  {
    id: 1,
    title: "DIGITAL EXPERT TRAINING-579 (HYBIRD EVENT) 20-21 Desember 2023",
    date: "20-21 December 2023",
    time: "09:30 AM",
    image: "training.webp",
    url: "/",
  },
  {
    id: 2,
    title: "DIGITAL EXPERT TRAINING-579 (HYBIRD EVENT) 20-21 Desember 2023",
    date: "20-21 December 2023",
    time: "09:30 AM",
    image: "training.webp",
    url: "/",
  },
  {
    id: 3,
    title: "DIGITAL EXPERT TRAINING-579 (HYBIRD EVENT) 20-21 Desember 2023",
    date: "20-21 December 2023",
    time: "09:30 AM",
    image: "training.webp",
    url: "/",
  },
  {
    id: 4,
    title: "DIGITAL EXPERT TRAINING-579 (HYBIRD EVENT) 20-21 Desember 2023",
    date: "20-21 December 2023",
    time: "09:30 AM",
    image: "training.webp",
    url: "/",
  },
];

const TrainingEra = () => {
  return (
    <section className="bg-slate-100 py-24">
      <div className="container flex flex-col items-center gap-12 px-6">
        {/* Row */}
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
          <h2 className="text-2xl font-semibold">Training ERA</h2>
          <span>Search</span>
        </div>

        {/* Row */}
        <ul className="grid w-full gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-4">
          {fakeData?.map((item) => (
            <li key={item.id}>
              <div className="grid gap-2">
                {/* # */}
                <figure aria-hidden className="aspect-1 w-full overflow-hidden">
                  <Image
                    src={`/${item.image}`}
                    alt={item.title}
                    width={480}
                    height={480}
                    className="h-full w-auto object-cover"
                  />
                </figure>

                {/* # */}
                <h3 className="mt-2 text-xs font-semibold text-foreground md:text-sm">
                  {item.title}
                </h3>

                {/* # */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span>{item.date}</span>
                  <span>{item.time}</span>
                </div>
              </div>
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

export default TrainingEra;
