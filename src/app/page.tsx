import type { Metadata } from "next";
import CardCity from "../components/cards/CardCity";
import CardHome from "../components/cards/CardHome";
import HeroSearch from "../components/hero-search/HeroSearch";

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

      <section className="s-screen justify-center gap-50">
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
          <CardHome
            href="/"
            imageSrc="/images/type-studio/img-home-podcast.png"
            imageAlt="Studio Podcast"
            title="Louer un Studio Podcast Professionnel"
            description="Donnez une voix professionnelle à vos idées. Nos studios podcast sont insonorisés et équipés de microphones broadcast, tables de mixage et interfaces audio de pointe pour un son cristallin. Parfait pour interviews, monologues ou tables rondes."
          />
          <CardHome
            href="/"
            imageSrc="/images/type-studio/img-home-photo.png"
            imageAlt="Studio Photo"
            title="Trouver un Studio Photo pour vos Shootings"
            description="Capturer l'instant parfait demande un cadre adapté. Nos studios photo offrent des fonds variés, des systèmes d'éclairage professionnels (flashs, LED), des espaces modulables pour portraits, mode, produits ou e-commerce. L'environnement idéal pour la lumière et la créativité."
          />
          <CardHome
            href="/"
            imageSrc="/images/type-studio/img-home-video.png"
            imageAlt="Studio Vidéo"
            title="Réserver un Studio Vidéo Équipé"
            description="De la web-série au clip musical, nos studios vidéo sont conçus pour toutes vos productions. Profitez de fonds verts, cycloramas, éclairages cinéma, rails de travelling et espaces de post-production. Donnez vie à vos scénarios avec un équipement complet."
          />
        </div>
      </section>

      <section className="s-screen justify-center gap-50">
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
          <CardCity
            href="/"
            imageSrc="/images/city/img-city-paris.png"
            imageAlt="Paris"
            title="Paris"
          />
          <CardCity
            href="/"
            imageSrc="/images/city/img-city-lyon.png"
            imageAlt="Lyon"
            title="Lyon"
          />
          <CardCity
            href="/"
            imageSrc="/images/city/img-city-marseille.png"
            imageAlt="Marseille"
            title="Marseille"
          />
          <CardCity
            href="/"
            imageSrc="/images/city/img-city-nantes.png"
            imageAlt="Nantes"
            title="Nantes"
          />
          <CardCity
            href="/"
            imageSrc="/images/city/img-city-clermont-fd.png"
            imageAlt="Clermont-Ferrand"
            title="Clermont-Ferrand"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
