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
    "Information Systems undergraduate at Universitas Airlangga exploring the intersection of technology, business, enterprise systems, technology risk, and data-driven problem solving.",
  keywords: [
    "Muhammad Naufal Zaki",
    "Information Systems",
    "Universitas Airlangga",
    "Enterprise Systems",
    "Technology Risk",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Naufal Zaki" }],
  alternates: {
    canonical: "https://naufalzaki.vercel.app",
  },
  openGraph: {
    type: "website",
    url: "https://naufalzaki.vercel.app",
    siteName: "Muhammad Naufal Zaki Portfolio",
    title: "Muhammad Naufal Zaki — Information Systems Portfolio",
    description:
      "Information Systems undergraduate at Universitas Airlangga exploring the intersection of technology, business, enterprise systems, technology risk, and data-driven problem solving.",
    images: [
      {
        url: "https://naufalzaki.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Naufal Zaki — Information Systems Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Naufal Zaki — Information Systems Portfolio",
    description:
      "Information Systems undergraduate at Universitas Airlangga exploring the intersection of technology, business, enterprise systems, technology risk, and data-driven problem solving.",
    images: ["https://naufalzaki.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
        {children}
      </body>
    </html>
  );
}
