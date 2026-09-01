import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/caveat/400.css";
import "./globals.css";

const SITE_URL = "https://naufalzaki.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Muhammad Naufal Zaki — Information Systems Portfolio",
    template: "%s | Muhammad Naufal Zaki",
  },
  description:
    "Information Systems undergraduate at Universitas Airlangga exploring the intersection of technology, business, enterprise systems, technology risk, financial technology, and data-driven problem solving.",
  applicationName: "Muhammad Naufal Zaki",
  authors: [
    {
      name: "Muhammad Naufal Zaki",
      url: SITE_URL,
    },
  ],
  creator: "Muhammad Naufal Zaki",
  publisher: "Muhammad Naufal Zaki",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: "Muhammad Naufal Zaki",
    title: "Muhammad Naufal Zaki — Information Systems Portfolio",
    description:
      "Selected work, experience, and projects across Information Systems, technology, business, data, and emerging enterprise technologies.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Muhammad Naufal Zaki — Information Systems Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Naufal Zaki — Information Systems Portfolio",
    description:
      "Selected work, experience, and projects across Information Systems, technology, business, data, and emerging enterprise technologies.",
    images: [`${SITE_URL}/og-image.png`],
  },
  // Google Search Console: add verification.google here once you have the
  // exact HTML meta-tag token from GSC for https://naufalzaki.vercel.app/
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Naufal Zaki",
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: "Information Systems Student",
  description:
    "Information Systems undergraduate at Universitas Airlangga exploring the intersection of technology, business, enterprise systems, technology risk, financial technology, and data-driven problem solving.",
  affiliation: {
    "@type": "EducationalOrganization",
    name: "Universitas Airlangga",
    url: "https://www.unair.ac.id/",
  },
  sameAs: [
    "https://github.com/Skyiop1",
    "https://www.linkedin.com/in/naufalz/",
  ],
  award: ["BSI Scholarship Awardee"],
  knowsAbout: [
    "Information Systems",
    "Enterprise Systems",
    "Technology Risk",
    "Financial Technology",
    "Data Analytics",
    "Machine Learning",
    "Blockchain",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Naufal Zaki",
  url: SITE_URL,
  description:
    "Personal portfolio of Muhammad Naufal Zaki, an Information Systems undergraduate at Universitas Airlangga.",
  author: {
    "@type": "Person",
    name: "Muhammad Naufal Zaki",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
