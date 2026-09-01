import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/caveat/400.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://naufalzaki.vercel.app"),
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
      url: "https://naufalzaki.vercel.app",
    },
  ],
  creator: "Muhammad Naufal Zaki",
  publisher: "Muhammad Naufal Zaki",
  keywords: [
    "Muhammad Naufal Zaki",
    "Muhammad Naufal Zaki Universitas Airlangga",
    "Naufal Zaki Information Systems",
    "Muhammad Naufal Zaki Portfolio",
    "Information Systems",
    "Universitas Airlangga",
    "Enterprise Systems",
    "Technology Risk",
    "Financial Technology",
    "Data Analytics",
    "Machine Learning",
  ],
  alternates: {
    canonical: "https://naufalzaki.vercel.app",
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
    url: "https://naufalzaki.vercel.app",
    siteName: "Muhammad Naufal Zaki",
    title: "Muhammad Naufal Zaki — Information Systems Portfolio",
    description:
      "Selected work, experience, and projects across Information Systems, technology, business, data, and emerging enterprise technologies.",
    images: [
      {
        url: "https://naufalzaki.vercel.app/og-image.png",
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
    images: ["https://naufalzaki.vercel.app/og-image.png"],
    creator: "@naufallzakki",
  },
  verification: {
    google: "google943c1585c75dbe8c",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Naufal Zaki",
  url: "https://naufalzaki.vercel.app",
  image: "https://naufalzaki.vercel.app/profile.jpg",
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
  url: "https://naufalzaki.vercel.app",
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
