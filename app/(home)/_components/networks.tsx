import Image from "next/image";

const Networks = () => {
  return (
    <section className="bg-[#010812]">
      <div className="container">
        <figure aria-hidden className="w-full">
          <Image
            src="/our_networks.webp"
            alt="Image"
            width={1024}
            height={565}
            className="h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
};

export default Networks;
