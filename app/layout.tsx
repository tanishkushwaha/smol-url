import type { Metadata } from "next";
import { kollektif } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmolURL",
  description: "A URL Shortener App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kollektif.className}>{children}</body>
    </html>
  );
}
