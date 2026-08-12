import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const siteConfig = {
  title: "Sorting Algorithms Simulator | AlgoSortify",
  description: "An interactive 3D animated sorting simulator for learning quick sort, merge sort, bubble sort, heap sort, and more.",
  url: "https://algosortify.vercel.app",
  alternateUrl: "https://sorting-algorithms-simulator.vercel.app",
  keywords: [
    "sorting algorithms",
    "sorting visualizer",
    "sorting simulator",
    "quick sort",
    "merge sort",
    "bubble sort",
    "heap sort",
    "insertion sort",
    "radix sort",
    "counting sort",
    "shell sort",
    "cocktail sort",
    "gnome sort",
    "tim sort",
    "selection sort",
    "algorithm visualization",
    "algorithm visualization",
    "algorithm simulator",
    "algorithm learning",
    "algorithm education",
    "algorithm teaching",
    "algorithm animation",
    "algorithm demonstration",
    "algorithm tutorial",
    "sorting algorithm tutorial",
    "sorting algorithm visualization",
    "sorting algorithm simulator",
    "algovision",
    "algosortify",
    "AlgoSortify",
    "algorithm simulator",
  ]
};

export const metadata: Metadata = {
  title: siteConfig.title,
  verification: {
    google: "Om0vzQb5DtNKUi-MrMnXSV_mDvGeVdxV3P-lIG4MmQ0",
    other: {
      "msvalidate.01": "4029A6DB07AC15E01324DF3414E63DDF"
    }
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "AlgoSortify",
    type: "website",
    locale: "en_US",
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
  other: {
    "platform": "website",
    "generator": "Next.js",
    "publisher": "Abhishek Shah",
    "author": "Abhishek Shah",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col transition-colors duration-300">
        {children}
        <Analytics />
      </body>
    </html>
  );
}