import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Podcast - Trouvez votre studio",
  description:
    "Trouvez et louez votre studio d'enregistrement pour podcast, shooting photo ou production vidéo. Découvrez les meilleures adresses à Paris, Lyon, Marseille et plus encore.",
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
  },
};

export default function StudiosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
