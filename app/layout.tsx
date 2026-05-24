import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Caveat,
  Epilogue,
  Gloria_Hallelujah,
  Hanken_Grotesk,
  Permanent_Marker,
  Space_Mono,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Providers from "./providers";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marker",
});

const scribble = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-scribble",
});

const doodle = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-doodle",
});

const accent = Epilogue({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "b1kjuu.studio",
  description: "A dual-path portfolio for development and editing work (b1kjuu.studio).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} ${marker.variable} ${scribble.variable} ${doodle.variable} ${accent.variable}`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
