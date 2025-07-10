import type { Metadata, Viewport } from "next";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
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
        url: "/favicon/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    other: [
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
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
      "Trouvez et louez votre studio d'enregistrement pour podcast, shooting photo ou production vidéo. Découvrez les meilleures adresses à Paris, Lyon, Marseille et plus encore.",
    images: [
      {
        url: "/images/og-cover.webp",
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
        <Footer />
      </body>
    </html>
  );
}
