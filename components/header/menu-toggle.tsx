import { Menu } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SiteLogoMobile } from "../site-logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuMobile } from "./menu-mobile";
import Image from "next/image";

export const MenuToggle = () => {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        aria-label="Togglr Menu"
        className="flex cursor-pointer text-white md:hidden"
      >
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full w-4/5 flex-col gap-0 border-none bg-gradient-to-br from-[#8d1638] to-[#a21a36] p-0 text-white md:hidden"
      >
        {/* # SheetHeader */}
        <div className="flex h-16 items-center border-b border-white/25 p-4">
          <SheetClose asChild>
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
          </SheetClose>
        </div>

        {/* # SheetBody */}
        <MenuMobile />

        {/* # SheetFooter */}
      </SheetContent>
    </Sheet>
  );
};
