import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/caveat/400.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Muhammad Naufal Zaki | Information Systems & Leadership",
    template: "%s | Muhammad Naufal Zaki",
  },
  description:
    "Bilingual portfolio of Muhammad Naufal Zaki, an Information Systems undergraduate interested in technology, leadership, and practical impact.",
  keywords: [
    "Muhammad Naufal Zaki",
    "Information Systems",
    "Universitas Airlangga",
    "Technology",
    "Leadership",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Naufal Zaki" }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Muhammad Naufal Zaki Portfolio",
    title: "Muhammad Naufal Zaki | Information Systems & Leadership",
    description:
      "Technology, leadership, and practical projects—built while learning and growing.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Naufal Zaki | Information Systems & Leadership",
    description:
      "Technology, leadership, and practical projects—built while learning and growing.",
    images: ["/og.png"],
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
