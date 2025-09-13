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
  metadataBase: new URL('https://thecfe.net'),
  title: "The CFE - It's the party of the year",
  description: "\"The CFE: If you aren't here, you're nobody.\" -Attendee. Join us for CFE Season 4. Limited tickets available.",
  keywords: "CFE, Christmas, Formal, Extravaganza",
  authors: [{ name: "The Incubator" }],
  robots: "index, follow",
  openGraph: {
    title: "The CFE - It's the party of the year",
    description: "\"The CFE: If you aren't here, you're nobody.\" -Attendee. Join us for CFE Season 4. Limited tickets available.",
    type: "website",
    locale: "en_US",
    siteName: "CFE Events",
    url: 'https://thecfe.net',
  },
  twitter: {
    card: "summary",
    title: "The CFE - It's the party of the year",
    description: "\"The CFE: If you aren't here, you're nobody.\" -Attendee. Join us for CFE Season 4. Limited tickets available.",
    creator: "@TheIncubator",
    site: "@TheIncubator",
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
    <html lang="en">
      <head>
        {/* Additional meta tags for better social sharing */}
        <meta name="twitter:domain" content="https://thecfe.net" />
        <link rel="canonical" href="https://thecfe.net" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cfe-dark-bg min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
