import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { MenuDesktop } from "./menu-desktop";
import { MenuToggle } from "./menu-toggle";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 w-full bg-gradient-to-br from-[#8d1638] to-[#a21a36] ">
      <div className="container flex h-16 items-center justify-between gap-4 px-6">
        {/* SiteLogo */}
        <Link href="/" aria-label="Era Indonesia">
          <Image
            aria-hidden
            src="/logo-white.png"
            alt="Era Indonesia"
            width={512}
            height={422}
            className="h-10 w-auto"
          />
        </Link>

        {/* Nav */}
        <MenuDesktop />

        {/* ButtonGroup */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent text-white"
          >
            Internal ERA
          </Button>

          <MenuToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
