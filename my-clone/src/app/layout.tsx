import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMontreal = localFont({
  src: [
    { path: "../../public/fonts/neueMontreal-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/neueMontreal-Italic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/neueMontreal-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/neueMontreal-MediumItalic.otf", weight: "500", style: "italic" },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duncraig Road | Marvell Tile & Stone",
  description:
    "Brick Slip Installation & Natural Stone Floor Tiling. A breathtaking brick-tiled arched ceiling project in Applecross, Western Australia.",
  openGraph: {
    title: "Duncraig Road | Marvell Tile & Stone",
    description: "Brick Slip Installation & Natural Stone Floor Tiling",
    images: [
      {
        url: "/images/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "A luxurious wardrobe featuring a unique brick tiled ceiling.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${neueMontreal.variable}`}>
      <body>{children}</body>
    </html>
  );
}
