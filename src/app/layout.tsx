import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thecfe.net'),
  title: "CFE Season 5 | You made the list",
  description: "\"If you aren't here, you're nobody.\" - CFE Attendee",
  keywords: "CFE, Christmas, Formal, Extravaganza, Season 5",
  authors: [{ name: "The Incubator" }],
  robots: "index, follow",
  openGraph: {
    title: "CFE Season 5 | You made the list",
    description: "\"If you aren't here, you're nobody.\" - CFE Attendee",
    type: "website",
    locale: "en_US",
    siteName: "CFE Events",
    url: 'https://thecfe.net',
    images: [
      {
        url: "https://thecfe.net/logo.png",
        width: 500,
        height: 500,
        alt: "CFE Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "CFE Season 5 | You made the list",
    description: "\"If you aren't here, you're nobody.\" - CFE Attendee",
    images: ["https://thecfe.net/logo.png"],
    creator: "@TheIncubator",
    site: "@TheIncubator",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover', // lets env(safe-area-inset-*) work under the notch and Safari toolbar
  themeColor: '#03140c',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-cfe-dark-bg">
      <head>
        {/* Additional meta tags for better social sharing */}
        <meta property="og:image:secure_url" content="https://thecfe.net/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta name="twitter:image:src" content="https://thecfe.net/logo.png" />
        <meta name="twitter:domain" content="thecfe.net" />
        <link rel="canonical" href="https://thecfe.net" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased bg-cfe-dark-bg min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
