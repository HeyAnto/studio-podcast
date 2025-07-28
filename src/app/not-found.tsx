import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio Podcast - 404 Not Found",
  description: "Pas de studio ici ! La page que vous cherchez n'existe pas.",
  robots: {
    index: false,
    follow: false,
    noarchive: false,
    nosnippet: false,
  },
};

const NotFound = () => {
  return (
    <main className="justify-center gap-50">
      <section className="gap-50">
        <div className="text-container items-center gap-16">
          <h1 className="font-heading text-5xl leading-none text-center">
            404 - Page Non Trouvée
          </h1>
          <p className="text-lg leading-normal text-center text-grey-2">
            La page que vous cherchez n'existe pas ou a été déplacée. Veuillez
            vérifier l'URL ou retourner à la page d'accueil.
          </p>
          <Link className="secondaryButton" href="/">
            <p className="text-base">Retourner à l'accueil</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
