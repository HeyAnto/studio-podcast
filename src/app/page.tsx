import type { Metadata } from "next";
import CityCard from "../components/cards/CityCard";
import HomeCard from "../components/cards/HomeCard";
import StepCard from "../components/cards/StepCard";
import HeroSearch from "../components/search/HeroSearch";

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
    <main className="gap-50">
      <section className="gap-50">
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
        <HeroSearch />
      </section>

      <section className="min-h-screen justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Découvrez le Studio Idéal selon Votre Projet
          </h2>
          <p className="text-lg leading-normal text-center text-grey-2">
            Chaque projet créatif est unique, et nécessite un environnement
            adapté. Chez Studio Podcast, nous avons regroupé des espaces
            spécialement conçus pour exceller dans votre domaine.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16">
          <HomeCard
            href="/location-studio/studio-podcast"
            imageSrc="/images/type-studio/img-home-podcast.webp"
            imageAlt="Studio Podcast"
            title="Louer un Studio Podcast Professionnel"
            description="Donnez une voix professionnelle à vos idées. Nos studios podcast sont insonorisés et équipés de microphones broadcast, tables de mixage et interfaces audio de pointe pour un son cristallin. Parfait pour interviews, monologues ou tables rondes."
          />
          <HomeCard
            href="/location-studio/studio-photo"
            imageSrc="/images/type-studio/img-home-photo.webp"
            imageAlt="Studio Photo"
            title="Trouver un Studio Photo pour vos Shootings"
            description="Capturer l'instant parfait demande un cadre adapté. Nos studios photo offrent des fonds variés, des systèmes d'éclairage professionnels (flashs, LED), des espaces modulables pour portraits, mode, produits ou e-commerce. L'environnement idéal pour la lumière et la créativité."
          />
          <HomeCard
            href="/location-studio/studio-video"
            imageSrc="/images/type-studio/img-home-video.webp"
            imageAlt="Studio Vidéo"
            title="Réserver un Studio Vidéo Équipé"
            description="De la web-série au clip musical, nos studios vidéo sont conçus pour toutes vos productions. Profitez de fonds verts, cycloramas, éclairages cinéma, rails de travelling et espaces de post-production. Donnez vie à vos scénarios avec un équipement complet."
          />
        </div>
      </section>

      <section className="max-w-md min-h-screen justify-center gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Vos Studios dans les Grandes Villes de France
          </h2>
          <p className="text-lg leading-normal text-center text-grey-2">
            Que votre projet soit à Paris, Lyon, Marseille ou au-delà, Studio
            Podcast vous connecte aux meilleurs espaces locaux. Notre réseau
            s'étend sur tout le territoire pour vous offrir un choix diversifié
            et de proximité.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16">
          <CityCard
            href="/studios/all/paris"
            imageSrc="/images/city/img-city-paris.webp"
            imageAlt="Paris"
            title="Paris"
          />
          <CityCard
            href="/studios/all/lyon"
            imageSrc="/images/city/img-city-lyon.webp"
            imageAlt="Lyon"
            title="Lyon"
          />
          <CityCard
            href="/studios/all/marseille"
            imageSrc="/images/city/img-city-marseille.webp"
            imageAlt="Marseille"
            title="Marseille"
          />
          <CityCard
            href="/studios/all/nantes"
            imageSrc="/images/city/img-city-nantes.webp"
            imageAlt="Nantes"
            title="Nantes"
          />
          <CityCard
            href="/studios/all/clermont-fd"
            imageSrc="/images/city/img-city-clermont-fd.webp"
            imageAlt="Clermont-Ferrand"
            title="Clermont-Ferrand"
          />
        </div>
      </section>

      <section className="max-w-md min-h-screen gap-50">
        <div className="text-container gap-16">
          <h2 className="font-heading text-5xl leading-none text-center">
            Studio Podcast Votre Partenaire Créatif
          </h2>
          <p className="text-lg leading-normal text-center text-grey-2">
            Notre engagement est double : offrir une visibilité maximale aux
            propriétaires de studios d'enregistrement et simplifier la recherche
            pour les créateurs. En rejoignant Studio Podcast, vous bénéficiez.
          </p>
        </div>
        <div className="min-w-screen flex flex-column gap-16">
          <StepCard
            step="1"
            title="D'un Référencement Optimisé"
            description="Chaque studio bénéficie d'une page dédiée, optimisée pour le SEO local et sectoriel, augmentant sa visibilité auprès d'une audience qualifiée."
          />
          <StepCard
            step="2"
            title="D'une Plateforme Intuitive"
            description="Trouvez, comparez et réservez facilement grâce à nos filtres avancés et nos descriptions détaillées."
          />
          <StepCard
            step="3"
            title="D'une Communauté Engagée"
            description="Faites partie d'un réseau dynamique de professionnels et passionnés de l'audio et de l'image. Propriétaire de studio ? Référencez votre espace dès aujourd'hui et multipliez vos locations !"
          />
        </div>
        <a className="secondaryButton" href="/">
          <p className="text-base">Référencez votre espace</p>
        </a>
      </section>
    </main>
  );
};

export default HomePage;
