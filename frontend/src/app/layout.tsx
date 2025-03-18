import type { Metadata } from "next";
import { Mitr } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/NavBar";
import NextAuthProvider from "./provider/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

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
  const session = getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={mitr.className}>
        <NextAuthProvider session={session}>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
