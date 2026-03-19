import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/landing-page/Header/Header";
import Image from "next/image";

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
          <Image src='/images/herosectiongradient.png' alt="" width={600} height={500} className="z-20 translate-y-15 pointer-events-none translate-x-150 hidden lg:flex absolute" />
          <section className="flex flex-col py-7 px-6 mx-auto lg:max-w-6xl">
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
