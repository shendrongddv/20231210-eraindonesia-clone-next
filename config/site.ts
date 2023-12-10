import { Box, Instagram } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ERA Indonesia",
  description: "ERA Indonesia is #1 Property Agent in Indonesia.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
};

// NavHeader
export const siteNavHeader = [
  {
    id: 1,
    label: "Beranda",
    desc: "",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: false,
  },
  {
    id: 2,
    label: "Tentang Kami",
    desc: "",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Hubungi Kami",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 2,
        label: "Sejarah Singkat",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 3,
        label: "Struktur Organisasi",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 4,
        label: "Struktur Pemegang Saham",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 5,
        label: "Direksi & Komisaris",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: true,
      },
      {
        id: 6,
        label: "Biro Adminstrasi Efek",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: true,
      },
      {
        id: 7,
        label: "Kantor Akuntan Publik",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: true,
      },
      {
        id: 8,
        label: "Anggaran Dasar",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: true,
      },
      {
        id: 9,
        label: "Tata Kelola Perusahaan",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: true,
      },
      {
        id: 10,
        label: "CSR",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: true,
      },
    ],
  },
  {
    id: 3,
    label: "Investor",
    desc: "",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Prospektus",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 2,
        label: "Laporan Tahunan",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 3,
        label: "Laporan Keuangan",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 4,
        label: "Informasi RUPS",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 5,
        label: "Informasi Saham",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 6,
        label: "Informasi Dividen",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 7,
        label: "Keterbukaan Informasi",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
    ],
  },
  {
    id: 4,
    label: "Majalah Digital",
    desc: "",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: false,
  },
  {
    id: 5,
    label: "Kantor Era",
    desc: "",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: false,
  },
  {
    id: 6,
    label: "Internal Era",
    desc: "",
    url: "/",
    icon: Box,
    isAccent: false,
    isGroup: false,
  },
];

// SocialLinks
export const SocialLinks = [
  {
    id: 1,
    label: "Instagram",
    icon: Instagram,
    url: "/",
  },
  {
    id: 2,
    label: "Instagram",
    icon: Instagram,
    url: "/",
  },
  {
    id: 3,
    label: "Instagram",
    icon: Instagram,
    url: "/",
  },
  {
    id: 4,
    label: "Instagram",
    icon: Instagram,
    url: "/",
  },
  {
    id: 5,
    label: "Instagram",
    icon: Instagram,
    url: "/",
  },
];

// AppLinks
export const AppLinks = [
  {
    id: 1,
    label: "Google Play",
    image: "android.svg",
    url: "/",
  },
  {
    id: 2,
    label: "Google Play",
    image: "android.svg",
    url: "/",
  },
];
