import Image from "next/image";

const TopAssociate = () => {
  return (
    <section className="bg-slate-100 py-24">
      <div className="container px-6">
        {/* Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          {/* Col */}
          <div className="space-y-8 rounded-xl bg-gradient-to-br from-[#8d1638] to-[#a21a36] p-8 text-white md:w-3/12 md:rounded-2xl">
            {/* # */}
            <div className="">
              {/* ## */}
              {/* <figure aria-hidden className="h-24 w-auto shrink-0">
                <Image
                  src="/piala.webp"
                  alt="Image"
                  width={104}
                  height={128}
                  className="h-full w-auto"
                />
              </figure> */}

              {/* ## */}
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl font-bold">Top of The Month</span>
                <span className="text-sm opacity-90">November 2023</span>
                <span className="mt-2 text-lg font-semibold">
                  Marketing Associate
                </span>
                <span className="text-xs opacity-90">#National</span>
              </div>
            </div>

            {/* # */}
            <div className="flex flex-col items-center gap-4 text-center">
              {/* ## */}
              <figure
                aria-hidden
                className="h-24 w-auto shrink-0 overflow-hidden rounded-full"
              >
                <Image
                  src="/user.jpg"
                  alt="Image"
                  width={120}
                  height={120}
                  className="h-full w-auto"
                />
              </figure>

              {/* ## */}
              <div className="flex flex-col">
                <span className="text-lg font-semibold">
                  Rika Darmajanti Widjaja
                </span>
                <span className="text-s90font-medium opacity-80">
                  Era Project
                </span>
              </div>
            </div>
          </div>

          {/* Col */}
          <div className="md:w-9/12">
            <ul className="grid w-full grid-cols-3 gap-4 md:gap-8">
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopAssociate;

const UserCard = () => {
  return (
    <li className="flex flex-col items-center gap-4 md:flex-row">
      {/* # */}
      <figure
        aria-hidden
        className="h-20 w-auto shrink-0 overflow-hidden rounded-full border-2 border-white shadow-lg md:h-20"
      >
        <Image
          src="/user.jpg"
          alt="Image"
          width={120}
          height={120}
          className="h-full w-auto"
        />
      </figure>

      {/* # */}
      <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-start">
        <span className="text-[0.6rem] font-semibold leading-snug text-destructive">
          South Jakarta
        </span>
        <span className="text-sm font-semibold leading-snug">
          Era Fiesta Gading Serpong
        </span>
        <span className="text-[0.6rem] font-semibold leading-snug opacity-80">
          Reyza Mandliko Mikajeva
        </span>
      </div>
    </li>
  );
};