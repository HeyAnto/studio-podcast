import CityCard from "@/components/cards/CityCard";
import StudioCard from "@/components/cards/StudioCard";
import ContentFooter from "@/components/contentSections/ContentFooter";
import ContentHero from "@/components/contentSections/ContentHero";
import ContentList from "@/components/contentSections/ContentList";
import studiosData from "@/data/studios.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Studio Podcast - Location Studio Vidéo Pro - Tournage, Clip, Publicité",
  description:
    "Louez un studio vidéo équipé (fond vert, cyclorama, éclairage cinéma) pour vos tournages, clips, pubs ou streaming. Donnez vie à vos scénarios les plus ambitieux.",
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
  },
};

const LocationStudioVideoPage = () => {
  const videoStudios = studiosData
    .filter((studio) => studio.tag === "Vidéo")
    .slice(0, 3);

  return (
    <main className="gap-50">
      <ContentHero
        title="Location studio vidéo : donnez vie à vos productions cinématographiques"
        description={`Passez à la vitesse supérieure pour vos projets audiovisuels avec les studios vidéo professionnels de Studio Podcast. Que vous soyez vidéaste, réalisateur, créateur de contenu pour le web ou une entreprise, nos espaces sont conçus pour offrir un cadre technique et créatif optimal pour tous vos tournages.

        Découvrez notre sélection de studios vidéo équipés des dernières technologies : fonds verts, cycloramas, systèmes d'éclairage cinéma, et espaces de post-production. Donnez vie à vos scénarios, de la web-série au clip musical, avec un équipement complet et performant.`}
        coverImg="/images/type-studio/img-home-video.webp"
      />

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <div className="text-container gap-16">
            <h2 className="font-heading text-5xl leading-none text-center">
              Pourquoi louer un studio vidéo professionnel ?
            </h2>
            <p className="text-lg leading-normal text-center text-grey-2">
              La location d'un studio vidéo dédié est un atout majeur pour la
              qualité et l'efficacité de vos productions. Voici les avantages
              clés.
            </p>
          </div>
          <ContentList
            fontSizes="text-lg"
            title="Qualité d'Image Supérieure :"
            description={`Accédez à des équipements vidéo et d'éclairage de pointe, garantissant des images nettes, bien exposées et cinématographiques.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Fonds et Décors Polyvalents :"
            description={`Profitez de fonds verts (chroma key) pour des incrustations, de cycloramas pour des plans sans fin, ou de décors modulables pour une grande variété de scènes.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Matériel Complet à Disposition :"
            description={`Utilisez des caméras professionnelles, objectifs spécifiques, systèmes d'éclairage LED ou HMI, rails de travelling, stabilisateurs et micros pour un son de qualité.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Environnement Contrôlé :"
            description={`Travaillez dans un espace insonorisé et à l'acoustique traitée, essentiel pour un son clair et sans interférences, et maîtrisez totalement l'ambiance visuelle.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Productivité et Professionnalisme :"
            description={`Un studio dédié vous permet de vous concentrer sur la réalisation, d'accueillir vos équipes et acteurs dans des conditions optimales, et de projeter une image professionnelle.`}
          />
        </div>
      </section>

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Trouvez votre studio vidéo dans votre Ville
          </h2>
          <p className="text-lg leading-normal text-center text-grey-2">
            Nous avons des studios vidéo à louer dans les principales villes de
            France. Sélectionnez votre ville pour découvrir les options près de
            chez vous.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16">
          <CityCard
            href="/studios/video/paris"
            imageSrc="/images/city/img-city-paris.webp"
            imageAlt="Paris"
            title="Paris"
          />
          <CityCard
            href="/studios/video/lyon"
            imageSrc="/images/city/img-city-lyon.webp"
            imageAlt="Lyon"
            title="Lyon"
          />
          <CityCard
            href="/studios/video/marseille"
            imageSrc="/images/city/img-city-marseille.webp"
            imageAlt="Marseille"
            title="Marseille"
          />
          <CityCard
            href="/studios/video/nantes"
            imageSrc="/images/city/img-city-nantes.webp"
            imageAlt="Nantes"
            title="Nantes"
          />
          <CityCard
            href="/studios/video/clermont-fd"
            imageSrc="/images/city/img-city-clermont-fd.webp"
            imageAlt="Clermont-Ferrand"
            title="Clermont-Ferrand"
          />
        </div>
      </section>

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <div className="text-container gap-16">
            <h2 className="font-heading text-5xl leading-none text-center">
              Ce que vous trouverez dans nos studios vidéo
            </h2>
            <p className="text-lg leading-normal text-center text-grey-2">
              Nos studios vidéo sont rigoureusement sélectionnés pour répondre
              aux exigences des productions audiovisuelles modernes.
            </p>
          </div>
          <ContentList
            fontSizes="text-lg"
            title="Caméras et Optiques :"
            description={`Accès à des caméras DSLR, hybrides, voire cinéma, avec une gamme variée d'objectifs.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Systèmes d'Éclairage Cinéma :"
            description={`Kits éclairage LED, Fresnel, projecteurs HMI, avec gélatines et modeleurs de lumière pour sculpter l'ambiance.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Fonds et Structures :"
            description={`Fonds verts, cycloramas blancs ou noirs, fonds papier, et structures pour accroches et décors.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Prise de Son Vidéo :"
            description={`Micros-cravates, micros canon, perches, enregistreurs audio dédiés pour capturer un son direct de haute qualité.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Moyens de Mouvement :"
            description={`Rails de travelling, sliders, stabilisateurs (gimbals), pieds et Dollies pour des mouvements fluides.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Espaces de Préparation et Post-production :"
            description={`Régie technique, loges, zones de maquillage, et parfois des postes de travail pour le montage ou le streaming.`}
          />
        </div>
      </section>

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Notre sélection de studios vidéo (toutes villes confondues)
          </h2>
        </div>
        <div className="studios-grid max-w-md">
          {videoStudios.map((studio) => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </div>
      </section>

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <div className="text-container gap-16">
            <h2 className="font-heading text-5xl leading-none text-center">
              Idéal pour quels projets vidéo ?
            </h2>
            <p className="text-lg leading-normal text-center text-grey-2">
              Nos studios vidéo sont parfaitement adaptés à une multitude de
              projets audiovisuels.
            </p>
          </div>
          <ContentList
            fontSizes="text-lg"
            title="Interviews et Talk-shows :"
            description={`Réalisez des entretiens professionnels avec un éclairage et un son impeccables.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Tutoriels et Formations en Ligne :"
            description={`Produisez des contenus éducatifs de haute qualité visuelle et sonore.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Clips Musicaux :"
            description={`Créez des univers visuels captivants pour accompagner votre musique.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Publicités et Films Institutionnels :"
            description={`Tournez des spots percutants pour vos marques ou entreprises.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Web-séries et Courts-Métrages :"
            description={`Donnez vie à vos scénarios avec un environnement de tournage professionnel.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Streaming Live :"
            description={`Organisez des diffusions en direct avec une qualité broadcast.`}
          />
        </div>
      </section>

      <ContentFooter
        title="Prêt à tourner votre prochain chef-d'œuvre ?"
        description={`Trouvez le studio vidéo idéal et donnez vie à vos scénarios les plus audacieux !`}
        button="Nos studios"
        buttonLink="/studios/video/all"
        footerImg="/images/type-studio/img-footer-video.webp"
      />
    </main>
  );
};

export default LocationStudioVideoPage;
