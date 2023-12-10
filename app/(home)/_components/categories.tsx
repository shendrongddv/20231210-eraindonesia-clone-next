import { cn } from "@/lib/utils";
import Image from "next/image";

const fakeData = [
  {
    id: 1,
    label: "Apartment",
    image: "apartment.webp",
    url: "/",
    isLarge: false,
  },
  {
    id: 2,
    label: "Rumah",
    image: "rumah.webp",
    url: "/",
    isLarge: true,
  },
  {
    id: 3,
    label: "Ruko",
    image: "ruko.webp",
    url: "/",
    isLarge: false,
  },
  {
    id: 4,
    label: "Kantor",
    image: "kantor.webp",
    url: "/",
    isLarge: false,
  },
  {
    id: 5,
    label: "Tanah",
    image: "tanah.webp",
    url: "/",
    isLarge: false,
  },
];

const Categories = () => {
  return (
    <section className="bg-slate-100 md:px-4 md:pt-24">
      <div className="container">
        {/* Row */}
        <ul className="grid grid-cols-3 sm:gap-6 md:gap-8">
          {fakeData?.map((item) => (
            <li
              key={item.id}
              className={cn(
                "group relative isolate flex items-center justify-center overflow-hidden md:rounded-2xl",
                item.isLarge
                  ? "col-span-2"
                  : "md:aspect-h-9 md:aspect-w-16 max-md:aspect-1",
              )}
            >
              {/* BG */}
              <Image
                aria-hidden
                src={`/${item.image}`}
                alt="Image"
                width={360}
                height={275}
                className="absolute inset-0 z-0 h-full w-full object-cover"
              />

              {/* Content */}
              <div className="z-10 flex h-full w-full items-end justify-end bg-foreground/40 p-4 transition-colors group-hover:bg-foreground/20">
                <h3 className="text-sm font-bold text-white drop-shadow-lg md:text-lg">
                  {item.label}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
