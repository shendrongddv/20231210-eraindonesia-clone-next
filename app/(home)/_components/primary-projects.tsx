import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fakeData = [
  {
    id: 1,
    title: "The Spring Of Pakuan",
    image: "The Spring Of Pakuan.webp",
    url: "/",
  },
  {
    id: 2,
    title: "Kota Podomoro Tenjo",
    image: "Kota Podomoro Tenjo.webp",
    url: "/",
  },
];

const PrimaryProjects = () => {
  return (
    <section className="py-24 md:px-4">
      <div className="container flex flex-col items-center gap-8">
        {/* Row */}
        <div className="flex w-full items-center justify-between gap-4 max-md:px-4">
          <h2 className="text-2xl font-semibold">Primary Projects</h2>

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
              <div></div>
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

export default PrimaryProjects;
