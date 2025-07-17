import ContentHero from "@/components/contentSections/ContentHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Studio Podcast - Location Studio Professionnel (Podcast, Photo, Vidéo) en France",
  description:
    "Découvrez et louez le studio idéal pour vos projets. Studios podcast, photo et vidéo équipés de matériel professionnel partout en France. Simplicité et qualité garanties.",
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
  },
};

const LocationStudioPage = () => {
  return (
    <main className="gap-50">
      <ContentHero
        title="Location Studio Professionnel : Podcast, Photo & Vidéo en France"
        description={`Paris, ville lumière et capitale de la création, offre un cadre incomparable pour tous vos projets audiovisuels. Sur Studio Podcast, découvrez une sélection raffinée de studios à louer à Paris, adaptés à l'enregistrement de podcasts, aux shootings photo professionnels et aux productions vidéo de haute volée. Que vous soyez dans le Marais, à Montmartre, près de la Tour Eiffel ou à Bastille, trouvez l'environnement idéal qui fera décoller votre projet.

        Notre annuaire vous propose des studios équipés des dernières technologies, accessibles et conçus pour stimuler votre inspiration. Explorez les options disponibles pour chaque type de besoin spécifique.`}
        coverImg="/images/location-studio/img-cover-location-studio.webp"
      />

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Choisissez l'espace idéal pour votre projet créatif
          </h2>
          <p className="text-lg leading-normal text-center text-grey-2">
            Nous avons regroupé nos studios par spécialité pour vous aider à
            trouver rapidement l'environnement technique et créatif qui fera la
            différence pour votre production.
          </p>
        </div>

        <div className="contentCard items-center gap-28">
          <div className="flex flex-column gap-16">
            <h3 className="text-2xl text-center leading-none">
              Location Studio Podcast
            </h3>
            <p className="text-lg leading-normal text-grey-2">
              Donnez une voix professionnelle à vos idées. Nos studios podcast
              sont des havres de paix acoustiques, conçus pour des
              enregistrements sans compromis. Entièrement insonorisés et équipés
              de microphones broadcast, de tables de mixage intuitives et
              d'interfaces audio de haute qualité, ils garantissent un son
              cristallin pour vos interviews, monologues ou tables rondes.
            </p>
          </div>
          <div className="flex flex-column gap-16">
            <ContentList
              title="Idéal pour :"
              description={`Enregistrement de podcasts, voix-off, livres audio, émissions de radio.`}
            />
            <ContentList
              title="Votre avantage :"
              description={`Une qualité audio professionnelle sans les contraintes techniques, pour vous concentrer sur votre contenu.`}
            />
          </div>
          <a className="secondaryButton" href="/location-studio/podcast">
            <p className="text-base">Découvrir nos Studios Podcast</p>
          </a>
        </div>

    </main>
  );
};

export default LocationStudioPage;
