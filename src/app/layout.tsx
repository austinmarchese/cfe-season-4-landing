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
  metadataBase: new URL('https://thecfe-1zu203muc-austinmarcheses-projects.vercel.app'),
  title: "CFE - The Party of the Year",
  description: "\"The CFE: If you aren't here, you're nobody.\" -Attendee. Join us for CFE Season 4. Limited tickets available.",
  keywords: "CFE, Christmas, Formal, Extravaganza",
  authors: [{ name: "The Incubator" }],
  robots: "index, follow",
  openGraph: {
    title: "CFE Season 4 - Exclusive Performance Event",
    description: "\"The CFE: If you aren't here, you're nobody.\" -Attendee. Join us for CFE Season 4. Limited tickets available.",
    type: "website",
    locale: "en_US",
    siteName: "CFE Events",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "CFE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CFE Season 4 - Exclusive Performance Event",
    description: "\"The CFE: If you aren't here, you're nobody.\" -Attendee. Join us for CFE Season 4. Limited tickets available.",
    images: ["/logo.png"],
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
