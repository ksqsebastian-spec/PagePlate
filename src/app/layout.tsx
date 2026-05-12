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
  title: "Wild Horizons — A Visual Study of Sublime Landscapes",
  description:
    "Landscape photography and quiet architecture. Alpine sunsets, tropical coastlines, misty forests, and the homes that live alongside them.",
  openGraph: {
    title: "Wild Horizons — A Visual Study of Sublime Landscapes",
    description: "Landscape photography and quiet architecture.",
    images: [
      {
        url: "/images/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "A vivid alpine sunset washing color across mountain peaks.",
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
