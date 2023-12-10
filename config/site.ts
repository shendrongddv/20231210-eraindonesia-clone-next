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
        label: "Live Chat",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 2,
        label: "Chat Pages",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 3,
        label: "Contacts",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 4,
        label: "Knowledge Base",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 5,
        label: "AI Assist",
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
        label: "Hire Chat Agents",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 2,
        label: "Hire a Virtual Assistant",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 3,
        label: "Virtual Assistant Use Cases",
        desc: "",
        url: "/",
        icon: Box,
        isAccent: false,
      },
      {
        id: 4,
        label: "Customers",
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
