import "./globals.css";

export const metadata = {
  title: "Sorting Algorithms Simulator",
  description:
    "A premium animated sorting simulator for learning quick sort, merge sort, bubble sort, heap sort, and more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
