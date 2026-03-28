import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agribot | The Future of Farming",
  description: "Anti-gravity robotics for smarter, faster, and autonomous farming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth antialiased`}
    >
      <body className="bg-white text-slate-900 min-h-screen flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-900">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
