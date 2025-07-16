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
    </main>
  );
};

export default LocationStudioPage;
