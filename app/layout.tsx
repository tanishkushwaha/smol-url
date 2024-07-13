import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const kollektif = localFont({
  src: '../fonts/Kollektif.ttf',
  display: 'swap',
  variable: '--font-kollektif',
})


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
