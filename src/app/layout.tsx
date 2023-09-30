import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Wealth",
  description: "Join the Web Wealth community today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
