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
  title: "CFE - Exclusive Performance Event",
  description: "Join us for an exclusive CFE performance event. Limited tickets available. Experience the ultimate entertainment spectacle.",
  keywords: "CFE, performance, event, entertainment, tickets, exclusive, concert",
  authors: [{ name: "CFE Productions" }],
  robots: "index, follow",
  openGraph: {
    title: "CFE - Exclusive Performance Event",
    description: "Join us for an exclusive CFE performance event. Limited tickets available.",
    type: "website",
    locale: "en_US",
    siteName: "CFE Events",
  },
  twitter: {
    card: "summary_large_image",
    title: "CFE - Exclusive Performance Event",
    description: "Join us for an exclusive CFE performance event. Limited tickets available.",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-cfe-dark-bg min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
