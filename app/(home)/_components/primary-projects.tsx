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
    <section className="py-24">
      <div className="container flex flex-col items-center gap-12 px-4">
        {/* Row */}
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
          <h2 className="text-2xl font-semibold">Primary Projects</h2>
          <span>Search</span>
        </div>

        {/* Row */}
        <ul className="grid w-full gap-6 sm:grid-cols-2 sm:gap-8">
          {fakeData?.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center gap-4 text-center"
            >
              <figure aria-hidden className="h-auto w-full overflow-hidden">
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

export default PrimaryProjects;
