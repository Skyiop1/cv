import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio-page";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected academic and personal projects by Muhammad Naufal Zaki.",
};

export default function Projects() {
  return <PortfolioPage view="projects" />;
}
