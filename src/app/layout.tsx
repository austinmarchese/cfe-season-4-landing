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
    url: 'https://thecfe-1zu203muc-austinmarcheses-projects.vercel.app',
    images: [
      {
        url: "https://thecfe-1zu203muc-austinmarcheses-projects.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "CFE Season 4 - The Party of the Year",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The CFE - It's the party of the year",
    description: "\"The CFE: If you aren't here, you're nobody.\" -Attendee. Join us for CFE Season 4. Limited tickets available.",
    images: ["https://thecfe-1zu203muc-austinmarcheses-projects.vercel.app/logo.png"],
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
        <meta property="og:image:secure_url" content="https://thecfe-1zu203muc-austinmarcheses-projects.vercel.app/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:src" content="https://thecfe-1zu203muc-austinmarcheses-projects.vercel.app/logo.png" />
        <meta name="twitter:domain" content="thecfe-1zu203muc-austinmarcheses-projects.vercel.app" />
        <link rel="canonical" href="https://thecfe-1zu203muc-austinmarcheses-projects.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cfe-dark-bg min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
