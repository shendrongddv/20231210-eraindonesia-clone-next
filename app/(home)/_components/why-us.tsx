import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="bg-[#010812]">
      <div className="container">
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
