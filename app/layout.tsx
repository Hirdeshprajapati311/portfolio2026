import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import "./globals.css";
import { PageTransition } from "@/components/animations/PageTransition";
import { CustomCursor } from "@/components/animations/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Hirdesh | Developer",
    template: "%s | Hirdesh",
  },
  description:
    "Portfolio of Hirdesh, a frontend and full-stack developer building thoughtful interfaces, useful systems, and experimental digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}