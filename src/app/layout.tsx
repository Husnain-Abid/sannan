import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Sannan | Unity Game Developer",
  description:
    "Unity Game Developer with 4+ years of experience in 2D & 3D game development. Specialized in gameplay programming, mobile games, Unity optimization, Scriptable Objects, DOTS, Netcode, design patterns, and scalable game architecture.",
  keywords: [
    "Muhammad Sannan",
    "Sannan",
    "Unity Developer",
    "Game Developer",
    "Unity Game Developer",
    "Mobile Game Developer",
    "Unity 3D",
    "Unity 2D",
    "Gameplay Programmer",
    "C# Developer",
    "Scriptable Objects",
    "DOTS",
    "Netcode for GameObjects",
    "NGO",
    "Unity Optimization",
    "Game Programming",
    "Tower Defense Game",
    "Hyper Casual Games",
    "Unity C#",
    "Unity Portfolio",
  ],
  authors: [
    {
      name: "Muhammad Sannan",
    },
  ],
  creator: "Muhammad Sannan",
  publisher: "Muhammad Sannan",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Muhammad Sannan | Unity Game Developer",
    description:
      "Experienced Unity Game Developer with expertise in 2D/3D games, gameplay programming, mobile development, DOTS, Netcode, Scriptable Objects, and scalable game architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Sannan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sannan | Unity Game Developer",
    description:
      "Unity Game Developer specializing in gameplay programming, mobile games, optimization, DOTS, Netcode, and scalable Unity architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}