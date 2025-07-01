import type { Metadata, Viewport } from "next";
import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/layout.css";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Studio Podcast",
  },
  description: "Studio Podcast",
  keywords: ["Studio", "Podcast", "Vidéo", "Photo"],
  authors: [{ name: "Studio Podcast Team" }],
  creator: "Studio Podcast",
  publisher: "Studio Podcast",
  icons: {
    icon: [
      {
        url: "/favicons/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    other: [
      {
        url: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://studio-podcast.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://studio-podcast.com",
    siteName: "Studio Podcast",
    title: "Studio Podcast",
    description:
      "Studio Podcast - Votre destination pour du contenu de qualité",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Podcast Cover Image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
