import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="bg-gradient-to-b from-slate-100 from-50% to-[#010812] to-50% px-4">
      <div className="container overflow-hidden rounded-xl shadow-lg md:rounded-2xl">
        <figure aria-hidden className="w-full">
          <Image
            src="/why_era.webp"
            alt="Image"
            width={1024}
            height={493}
            className="h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
};

export default WhyUs;
