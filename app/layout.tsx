import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const chococooky = localFont({
  src: '../fonts/Chococooky.ttf',
  display: 'swap',
  variable: '--font-chococooky',
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
      <body className={chococooky.className}>{children}</body>
    </html>
  );
}
