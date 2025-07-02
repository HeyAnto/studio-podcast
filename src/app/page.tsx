import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Podcast",
  description:
    "Trouvez et louez votre studio d'enregistrement pour podcast, shooting photo ou production vidéo. Découvrez les meilleures adresses à Paris, Lyon, Marseille et plus encore.",
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
  },
};

const HomePage = () => {
  return (
    <main>
      <section className="hero">
        <div className="text-container gap-16">
          <h1 className="font-heading text-5xl leading-none text-center">
            Votre plateforme de référence pour la location de studios en France
          </h1>
          <p className="text-lg leading-normal text-center text-grey-2">
            Studio Podcast est l’annuaire de référence pour trouver et réserver
            des studios podcast, photo et vidéo en France. Trouvez le lieu idéal
            pour vos projets créatifs, partout en France.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
