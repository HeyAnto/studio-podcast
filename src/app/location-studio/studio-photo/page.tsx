import CityCard from "@/components/cards/CityCard";
import StudioCard from "@/components/cards/StudioCard";
import ContentFooter from "@/components/contentSections/ContentFooter";
import ContentHero from "@/components/contentSections/ContentHero";
import ContentList from "@/components/contentSections/ContentList";
import studiosData from "@/data/studios.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Studio Podcast - Location Studio Photo Pro - Shooting, Portrait, Mode",
  description:
    "Louez un studio photo équipé de fonds variés, éclairages pro et espace modulable pour vos shootings, portraits, mode ou e-commerce. Donnez vie à vos visuels !",
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
  },
};

const LocationStudioPhotoPage = () => {
  const photoStudios = studiosData
    .filter((studio) => studio.tag === "Photo")
    .slice(0, 3);

  return (
    <main className="gap-50">
      <ContentHero
        title="Location studio photo : capturez l'instant en toute lumière"
        description={`Mettez en lumière votre vision créative avec les studios photo professionnels de Studio Podcast. Que vous soyez photographe professionnel, amateur passionné ou créateur de contenu, nos espaces sont conçus pour vous offrir un contrôle total sur l'éclairage, le décor et l'ambiance de vos shootings.

        Découvrez notre sélection de studios photo modernes et polyvalents, parfaitement équipés pour des portraits, des séances de mode, des packshots produits ou tout autre projet nécessitant un environnement photographique maîtrisé et de haute qualité.`}
        coverImg="/images/type-studio/img-home-photo.webp"
      />

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Pourquoi louer un studio photo professionnel ?
          </h2>
          <p className="text-lg leading-normal text-center text-grey-2">
            Opter pour la location d'un studio photo dédié est essentiel pour la
            qualité et la polyvalence de vos visuels. Voici les avantages
            majeurs.
          </p>
        </div>
        <div className="text-container gap-16">
          <ContentList
            fontSizes="text-lg"
            title="Maîtrise de la Lumière :"
            description={`Accédez à des systèmes d'éclairage professionnels (flashs de studio, LED, modeleurs) pour sculpter la lumière selon vos besoins, indépendamment des conditions extérieures.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Fonds et Décors Variés :"
            description={`Changez d'ambiance en un instant grâce à une large gamme de fonds (papier, tissu, chroma key) et d'espaces modulables pour une créativité illimitée.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Équipement Pro à Disposition :"
            description={`Utilisez du matériel coûteux et performant (trépieds, supports, déclencheurs, réflecteurs) sans avoir à l'acheter ou le transporter.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Espace et Confidentialité :"
            description={`Travaillez dans un environnement spacieux, organisé et privé, idéal pour la concentration et le confort de vos modèles ou de vos équipes.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Ambiance Contrôlée :"
            description={`Que ce soit pour des portraits ou des photos de produits, le studio vous offre un environnement constant, garantissant la cohérence de vos séries d'images.`}
          />
        </div>
      </section>

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Trouvez Votre Studio Photo dans votre Ville
          </h2>
          <p className="text-lg leading-normal text-center text-grey-2">
            Nous avons des studios photo à louer dans les principales villes de
            France. Sélectionnez votre ville pour découvrir les options près de
            chez vous.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16">
          <CityCard
            href="/studios/photo/paris"
            imageSrc="/images/city/img-city-paris.webp"
            imageAlt="Paris"
            title="Paris"
          />
          <CityCard
            href="/studios/photo/lyon"
            imageSrc="/images/city/img-city-lyon.webp"
            imageAlt="Lyon"
            title="Lyon"
          />
          <CityCard
            href="/studios/photo/marseille"
            imageSrc="/images/city/img-city-marseille.webp"
            imageAlt="Marseille"
            title="Marseille"
          />
          <CityCard
            href="/studios/photo/nantes"
            imageSrc="/images/city/img-city-nantes.webp"
            imageAlt="Nantes"
            title="Nantes"
          />
          <CityCard
            href="/studios/photo/clermont-fd"
            imageSrc="/images/city/img-city-clermont-fd.webp"
            imageAlt="Clermont-Ferrand"
            title="Clermont-Ferrand"
          />
        </div>
      </section>

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Ce que vous trouverez dans nos studios photo
          </h2>
          <p className="text-lg leading-normal text-center text-grey-2">
            Nos studios photo sont équipés pour répondre aux exigences des
            professionnels et des projets créatifs. Voici une liste non
            exhaustive des équipements et aménagements typiques.
          </p>
        </div>
        <div className="text-container gap-16">
          <ContentList
            fontSizes="text-lg"
            title="Systèmes d'Éclairage Avancés :"
            description={`Flashs monoblocs, générateurs, panneaux LED, anneaux lumineux, avec une variété de modeleurs (boîtes à lumière, parapluies, bols beauté, snoots).`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Fonds Photo Diversifiés :"
            description={`Rouleaux de papier (blanc, noir, gris, couleurs vives), fonds tissu, murs texturés, cycloramas (fond sans raccord).`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Supports et Accessoires :"
            description={`Trépieds robustes, pieds de lumière, perches, pinces, tables de prise de vue pour packshot, réflecteurs.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Espaces Fonctionnels :"
            description={`Vestiaire et espace maquillage, zones de préparation, Wi-Fi haut débit.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Options Supplémentaires :"
            description={`Certains studios proposent la location de matériel photo (boîtiers, objectifs) ou l'assistance d'un photographe/assistant lumière.`}
          />
        </div>
      </section>

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Notre sélection de studios photo (toutes villes confondues)
          </h2>
        </div>
        <div className="studios-grid max-w-md">
          {photoStudios.map((studio) => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </div>
      </section>

      <section className="max-w-md justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Idéal pour quels projets photo ?
          </h2>
          <p className="text-lg leading-normal text-center text-grey-2">
            Nos studios photo sont polyvalents et conviennent à une large gamme
            de projets.
          </p>
        </div>
        <div className="text-container gap-16">
          <ContentList
            fontSizes="text-lg"
            title="Portraits et Books :"
            description={`Pour des portraits professionnels, artistiques ou des books de modèles.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Mode et Lookbooks :"
            description={`Créez des visuels stylisés pour des collections de vêtements.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="E-commerce et Packshots :"
            description={`Obtenez des photos de produits nettes et valorisantes pour vos boutiques en ligne.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Projets Artistiques :"
            description={`Laissez libre cours à votre créativité pour des mises en scène complexes.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Publicité et Éditorial :"
            description={`Réalisez des campagnes percutantes pour magazines ou marques.`}
          />
          <ContentList
            fontSizes="text-lg"
            title="Famille et Événementiel :"
            description={`Pour des séances photos plus intimes ou la capture de petits événements.`}
          />
        </div>
      </section>

      <ContentFooter
        title="Prêt à sublimer vos images ?"
        description={`Trouvez le studio photo idéal et donnez vie à vos visions photographiques !`}
        button="Nos studios"
        buttonLink="/studios/photo/all"
        footerImg="/images/type-studio/img-footer-photo.webp"
      />
    </main>
  );
};

export default LocationStudioPhotoPage;
