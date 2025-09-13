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
  title: "It's the party of the year",
  description: "\"If you aren't here, you're nobody.\" - CFE Attendee",
  keywords: "CFE, Christmas, Formal, Extravaganza",
  authors: [{ name: "The Incubator" }],
  robots: "index, follow",
  openGraph: {
    title: "It's the party of the year",
    description: "\"If you aren't here, you're nobody.\" - CFE Attendee",
    type: "website",
    locale: "en_US",
    siteName: "CFE Events",
    url: 'https://thecfe.net',
    images: [
      {
        url: "https://thecfe.net/logo.png",
        width: 400,
        height: 400,
        alt: "CFE Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "It's the party of the year",
    description: "\"If you aren't here, you're nobody.\" - CFE Attendee",
    images: ["https://thecfe.net/logo.png"],
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
        <meta property="og:image:secure_url" content="https://thecfe.net/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta name="twitter:image:src" content="https://thecfe.net/logo.png" />
        <meta name="twitter:domain" content="thecfe.net" />
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
