import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: JSX.Element | JSX.Element[];
}>) {
  return (
    <html lang="en">
      <body className="container sm:max-w-[600px] sm:mx-auto">{children}</body>
    </html>
  );
}
