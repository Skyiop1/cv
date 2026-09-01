import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio-page";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected academic, technical, and data-driven projects by Muhammad Naufal Zaki.",
  alternates: {
    canonical: "https://naufalzaki.vercel.app/projects",
  },
  openGraph: {
    url: "https://naufalzaki.vercel.app/projects",
    title: "Projects | Muhammad Naufal Zaki",
    description:
      "Selected academic, technical, and data-driven projects by Muhammad Naufal Zaki.",
    images: [
      {
        url: "https://naufalzaki.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Naufal Zaki — Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Muhammad Naufal Zaki",
    description:
      "Selected academic, technical, and data-driven projects by Muhammad Naufal Zaki.",
    images: ["https://naufalzaki.vercel.app/og-image.png"],
  },
};

export default function Projects() {
  return <PortfolioPage view="projects" />;
}
