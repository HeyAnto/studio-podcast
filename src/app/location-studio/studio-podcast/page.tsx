import CityCard from "@/components/cards/CityCard";
import StudioCard from "@/components/cards/StudioCard";
import ContentFooter from "@/components/contentSections/ContentFooter";
import ContentHero from "@/components/contentSections/ContentHero";
import ContentList from "@/components/contentSections/ContentList";
import studiosData from "@/data/studios.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Podcast - Louer Studio Podcast Professionnel",
  description:
    "Trouvez le studio podcast idéal pour vos enregistrements. Équipements de pointe, insonorisation parfaite. Parcourez notre sélection dans toute la France.",
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
  },
};

const LocationStudioPodcastPage = () => {
  const podcastStudios = studiosData
    .filter((studio) => studio.tag === "Podcast")
    .slice(0, 3);

  return (
    <main className="gap-50">
      <ContentHero
        title="Louer un studio podcast : l'excellence audio pour vos enregistrements"
        description={`Le podcasting est en plein essor, et pour se démarquer, la qualité audio est primordiale. Studio Podcast vous guide vers le studio podcast professionnel qui transformera vos idées en productions sonores de haute qualité. Nos partenaires proposent des espaces dédiés, insonorisés, et équipés du matériel indispensable pour un son clair, riche et sans interférences.

        Que vous soyez créateur de contenu, journaliste, ou entreprise, un studio d'enregistrement podcast vous offre l'environnement optimal pour capter des voix avec précision, mixer des ambiances et produire des émissions captivantes. Dites adieu aux bruits de fond et bonjour à la qualité broadcast !`}
        coverImg="/images/type-studio/img-home-podcast.webp"
      />

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Pourquoi louer votre studio avec Studio Podcast ?
          </h2>
          <ContentList
            fontSizes="text-lg"
            title="Qualité Sonore Inégalée :"
            description={`Bénéficiez d'une acoustique travaillée et d'une isolation phonique pour des enregistrements sans réverbération ni bruits parasites.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Équipement Pro :"
            description={`Accédez à des micros podcast de référence (Shure, Rode, Neumann), interfaces audio, et tables de mixage professionnelles.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Confort et Productivité :"
            description={`Travaillez dans un espace pensé pour la concentration, avec des conditions optimales pour vous et vos invités.`}
          />
        </div>
      </section>

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Trouvez votre studio podcast dans votre ville
          </h2>
          <p className="text-lg leading-normal text-center text-grey-2">
            Nous avons des studios podcast à louer partout en France.
            Sélectionnez votre ville pour découvrir les options près de chez
            vous.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16">
          <CityCard
            href="/studios/podcast/paris"
            imageSrc="/images/city/img-city-paris.webp"
            imageAlt="Paris"
            title="Paris"
          />
          <CityCard
            href="/studios/podcast/lyon"
            imageSrc="/images/city/img-city-lyon.webp"
            imageAlt="Lyon"
            title="Lyon"
          />
          <CityCard
            href="/studios/podcast/marseille"
            imageSrc="/images/city/img-city-marseille.webp"
            imageAlt="Marseille"
            title="Marseille"
          />
          <CityCard
            href="/studios/podcast/nantes"
            imageSrc="/images/city/img-city-nantes.webp"
            imageAlt="Nantes"
            title="Nantes"
          />
          <CityCard
            href="/studios/podcast/clermont-fd"
            imageSrc="/images/city/img-city-clermont-fd.webp"
            imageAlt="Clermont-Ferrand"
            title="Clermont-Ferrand"
          />
        </div>
      </section>

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Les équipements clés d'un bon studio podcast
          </h2>
          <p className="text-lg leading-normal text-center text-grey-2">
            Pour un enregistrement de qualité, assurez-vous que le studio
            podcast propose.
          </p>
        </div>
        <div className="text-container gap-16">
          <ContentList
            fontSizes="text-lg"
            title="Micros Broadcast de Qualité :"
            description={`Cardioïdes ou dynamiques, adaptés à la voix.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Tables de Mixage Multi-pistes :"
            description={`Pour gérer plusieurs intervenants et sources audio.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Casques d'Écoute :"
            description={`Pour un monitoring précis pendant l'enregistrement.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Cabine d'Enregistrement Insonorisée :"
            description={`Indispensable pour isoler votre son.`}
          />
        </div>
      </section>

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Notre sélection de studios podcast (toutes villes confondues)
          </h2>
        </div>
        <div className="studios-grid max-w-md">
          {podcastStudios.map((studio) => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </div>
      </section>

      <ContentFooter
        title="Prêt à concrétiser votre projet ?"
        description={`Trouvez le studio qui fera la différence pour votre prochaine production !`}
        button="Nos studios"
        buttonLink="/studios/podcast/all"
        footerImg="/images/type-studio/img-footer-podcast.webp"
      />
    </main>
  );
};

export default LocationStudioPodcastPage;
