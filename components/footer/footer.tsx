import { AppLinks, SocialLinks } from "@/config/site";
import { LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#8d1638] to-[#a21a36] px-4 pt-24 text-sm text-white">
      <div className="container space-y-16">
        {/* RowMain */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Col */}
          <div className="grid gap-2">
            <Link href="/" aria-label="Era Indonesia">
              <Image
                aria-hidden
                src="/logo-white.png"
                alt="Era Indonesia"
                width={422}
                height={512}
                className="h-16 w-auto"
              />
            </Link>

            <div className="mt-4 flex gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0" />
              <address className="not-italic">
                TCC Batavia Tower One, 8th Floor, Suites 3-5 Jl. K.H. Mas
                Mansyur kav. 126 Jakarta Pusat 10220
              </address>
            </div>

            <div className="mt-2 flex gap-2">
              <Mail className="mt-1 h-4 w-4 shrink-0" />
              <span>info@eraindonesia.com</span>
            </div>

            <div className="mt-2 flex gap-2">
              <Phone className="mt-1 h-4 w-4 shrink-0" />
              <span>(021) 570 8000 / (021) 2967 5123</span>
            </div>
          </div>

          {/* Col */}
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              voluptate est illo ducimus. Quam, ipsa. Eveniet est possimus amet.
              Tenetur rem quam odio ipsam eaque tempora, totam, iure laboriosam
              minima officia dolore.
            </p>
          </div>

          {/* Col */}
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              voluptate est illo ducimus. Quam, ipsa. Eveniet est possimus amet.
              Tenetur rem quam odio ipsam eaque tempora, totam, iure laboriosam
              minima officia dolore.
            </p>
          </div>

          {/* Col */}
          <div className="flex flex-col">
            <span className="text-base font-bold">Follow Us</span>

            <ul className="mt-3 flex gap-2">
              {SocialLinks?.map((item) => (
                <SocialItem key={item.id} {...item} />
              ))}
            </ul>

            <span className="mt-12 text-base font-bold">Download App</span>

            <ul className="mt-3 flex gap-2">
              {AppLinks?.map((item) => <AppLink key={item.id} {...item} />)}
            </ul>
          </div>
        </div>

        {/* RowBottom */}
        <div className="flex justify-center border-t border-white/25 py-5">
          <span>©2023, Era Indonesia</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

type SocialItemProps = {
  label: string;
  url: string;
  icon: LucideIcon;
};

type AppItemProps = {
  label: string;
  url: string;
  image: string;
};

const SocialItem = ({ label, icon: Icon, url }: SocialItemProps) => {
  return (
    <li>
      <Link
        href={url}
        aria-label={label}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border p-1"
      >
        <Icon className="h-4 w-4" />
      </Link>
    </li>
  );
};

const AppLink = ({ label, image, url }: AppItemProps) => {
  return (
    <li>
      <Link
        href={url}
        aria-label={label}
        target="_blank"
        className="h-10 w-max"
      >
        <Image
          src={`/${image}`}
          alt={label}
          width={100}
          height={40}
          className="h-10 w-auto"
        />
      </Link>
    </li>
  );
};
