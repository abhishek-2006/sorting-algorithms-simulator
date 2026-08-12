import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sorting Algorithms Simulator | AlgoVision",
  verification: {
    google: "Om0vzQb5DtNKUi-MrMnXSV_mDvGeVdxV3P-lIG4MmQ0",
    other: {
      "msvalidate.01": "4029A6DB07AC15E01324DF3414E63DDF"
    }
  },
  description:
    "An interactive 3D animated sorting simulator for learning quick sort, merge sort, bubble sort, heap sort, and more.",
  icons: {
    icon: "/favicon.ico",
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