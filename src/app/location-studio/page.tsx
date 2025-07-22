import ContentFooter from "@/components/contentSections/ContentFooter";
import ContentHero from "@/components/contentSections/ContentHero";
import ContentList from "@/components/contentSections/ContentList";
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
        coverImg="/images/type-studio/img-cover-location-studio.webp"
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
          <a className="secondaryButton" href="/location-studio/studio-podcast">
            <p className="text-base">Découvrir nos Studios Podcast</p>
          </a>
        </div>

        <div className="contentCard items-center gap-28">
          <div className="flex flex-column gap-16">
            <h3 className="text-2xl text-center leading-none">
              Location Studio Photo
            </h3>
            <p className="text-lg leading-normal text-grey-2">
              Mettez en lumière votre vision. Nos studios photo offrent la toile
              de fond parfaite pour vos clichés. Profitez d'espaces modulables,
              de fonds variés (papier, tissu, cyclorama) et de systèmes
              d'éclairage professionnels (flashs de studio, LED, modeleurs de
              lumière) pour maîtriser chaque détail de votre image. Que ce soit
              pour un portrait, de la mode ou du packshot, l'environnement est
              conçu pour la lumière et la créativité.
            </p>
          </div>
          <div className="flex flex-column gap-16">
            <ContentList
              title="Idéal pour :"
              description={`Shootings portraits, mode, e-commerce, packshots produits, projets artistiques.`}
            />
            <ContentList
              title="Votre avantage :"
              description={`Un cadre contrôlé et des équipements haut de gamme pour des photos toujours réussies.`}
            />
          </div>
          <a className="secondaryButton" href="/location-studio/studio-photo">
            <p className="text-base">Découvrir nos Studios Photo</p>
          </a>
        </div>

        <div className="contentCard items-center gap-28">
          <div className="flex flex-column gap-16">
            <h3 className="text-2xl text-center leading-none">
              Location Studio Vidéo
            </h3>
            <p className="text-lg leading-normal text-grey-2">
              Tournez comme un professionnel. Du web-série au clip musical, nos
              studios vidéo sont équipés pour répondre aux exigences des
              productions modernes. Accédez à des fonds verts (chroma key), des
              cycloramas, des éclairages cinéma, des rails de travelling et des
              espaces de post-production dédiés. Donnez vie à vos scénarios avec
              un équipement complet et performant.
            </p>
          </div>
          <div className="flex flex-column gap-16">
            <ContentList
              title="Idéal pour :"
              description={`Tournages d'interviews, tutoriels, clips musicaux, publicités, streaming live, films courts.`}
            />
            <ContentList
              title="Votre avantage :"
              description={`Un environnement technique complet et polyvalent pour des images de qualité cinématographique.`}
            />
          </div>
          <a className="secondaryButton" href="/location-studio/studio-video">
            <p className="text-base">Découvrir nos Studios Vidéo</p>
          </a>
        </div>
      </section>

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Pourquoi louer votre studio avec Studio Podcast ?
          </h2>
          <ContentList
            fontSizes="text-lg"
            title="Matériel Professionnel :"
            description={`Accédez à des équipements de pointe, sans les coûts d'achat ou de maintenance.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Flexibilité :"
            description={`Louez pour la durée qui vous convient, à l'heure, à la demi-journée ou à la journée.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Réseau National :"
            description={`Trouvez des studios de qualité dans toutes les grandes villes de France.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Simplicité :"
            description={`Un processus de recherche et de réservation intuitif pour gagner du temps.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Support :"
            description={`Une équipe à votre écoute pour vous aider à trouver le studio idéal.`}
          />
        </div>
      </section>
      <ContentFooter
        title="Prêt à concrétiser votre projet ?"
        description={`Trouvez le studio qui fera la différence pour votre prochaine production !`}
        button="Nos studios"
        buttonLink="/studios"
        footerImg="/images/type-studio/img-footer-podcast.webp"
      />
    </main>
  );
};

export default LocationStudioPage;
