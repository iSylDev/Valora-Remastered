import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/landing-page/Header/Header";
import Image from "next/image";
import BackgroundImages from "@/components/BackgroundImages/BackgroundImages";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valora",
  description: "Making every moment count",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative">
          <Header />
          <BackgroundImages />
          <section className="flex flex-col py-7 px-6 mx-auto lg:max-w-7xl">
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
