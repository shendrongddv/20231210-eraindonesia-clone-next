import Image from "next/image";

type ListingItemProps = {
  title: string;
  image: string;
  url: string;
};

export const ListingItem = ({ title, image, url }: ListingItemProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-4 text-center">
      <figure
        aria-hidden
        className="aspect-1 h-auto w-full overflow-hidden rounded-xl"
      >
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
