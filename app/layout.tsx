import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navigation/Navbar";
import "./globals.css";
import { PageTransition } from "@/components/animations/PageTransition";
import { CustomCursor } from "@/components/animations/CustomCursor";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <CustomCursor />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}