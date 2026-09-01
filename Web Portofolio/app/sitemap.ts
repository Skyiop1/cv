import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://naufalzaki.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
    },
    {
      url: `${SITE_URL}/projects/`,
    },
  ];
}
