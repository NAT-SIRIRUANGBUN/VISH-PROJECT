import type { Metadata } from "next";
import { Mitr } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/NavBar";

const mitr = Mitr({
  subsets: ['latin', 'thai'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mitr.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
