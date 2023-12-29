import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GPA Calculator",
  description: "GPA Calculator for Nigeria University",
  twitter: {
    title: "GPA Calculator",
    description: "GPA Calculator for Nigeria University",
    images: "/GPA_Calculator.png",
  },
  openGraph: {
    title: "GPA Calculator",
    description: "GPA Calculator for Nigeria University",
    siteName: "GPA Calculator",
    images: "/GPA_Calculator.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
