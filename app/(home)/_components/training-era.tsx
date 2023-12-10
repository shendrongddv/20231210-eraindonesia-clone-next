import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ListingItem } from "./listing-card";

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
      <div className="container flex flex-col items-center gap-12 md:px-6">
        {/* Row */}
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
          <h2 className="text-2xl font-semibold">Training ERA</h2>
          <span>Search</span>
        </div>

        {/* Row */}
        <ul className="scrollbar-none flex overflow-hidden overflow-x-scroll">
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

export default TrainingEra;
