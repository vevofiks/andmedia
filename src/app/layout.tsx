import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AND Media Solutions | Global Media Strategy & Advertising",
  description:
    "AND Media Solutions delivers international media planning, OOH, DOOH, in-flight, and transit advertising across borders. Premium global brand strategy from Dubai to the world.",
  keywords: [
    "media strategy",
    "global advertising",
    "DOOH",
    "OOH",
    "in-flight advertising",
    "transit advertising",
    "Dubai media agency",
    "international media planning",
    "brand strategy",
  ],
  openGraph: {
    title: "AND Media Solutions | Global Media Strategy & Advertising",
    description:
      "International media planning and advertising solutions across borders, formats, and cultures.",
    type: "website",
    locale: "en_US",
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
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}


