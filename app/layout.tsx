import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seehafer Elemente | Stone & Tile Artisans",
  description:
    "Seehafer Elemente — precision stone and tile installation for residential and commercial spaces. Craftsmanship that endures.",
  openGraph: {
    title: "Seehafer Elemente | Stone & Tile Artisans",
    description:
      "Precision stone and tile installation. Craftsmanship that endures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} h-full`}
    >
      <body
        className="min-h-full"
        style={{
          fontFamily: "var(--font-body), Barlow, sans-serif",
          backgroundColor: "#E9E4DF",
          color: "#000",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
