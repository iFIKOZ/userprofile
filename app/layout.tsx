import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Atasan from "@/app/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "User Profile",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main className="min-h-screen bg-gray-100 text-black ">
        <Atasan />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
          </body>

        </div>
      </main>
    </html>
  );
}