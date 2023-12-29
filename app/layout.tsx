import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GPA Calculator",
  description: "GPA Calculator for Nigeria University",
  twitter: {
    card: "summary_large_image",
    title: "GPA Calculator",
    description: "GPA Calculator for Nigeria University",
    site: "@your_twitter_handle",
    images: ["/GPA_Calculator.png"],
  },
  openGraph: {
    title: "GPA Calculator",
    description: "GPA Calculator for Nigeria University",
    siteName: "GPA Calculator",
    images: [{ url: "/GPA_Calculator.png", alt: "GPA Calculator Image" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add any other necessary meta tags */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
