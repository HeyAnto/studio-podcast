import ContentList from "@/components/contentSections/ContentList";
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

const PolitiqueConfPage = () => {
  return (
    <main className="gap-50">
      <section className="gap-50">
        <div className="text-container gap-16">
          <p className="text-sm text-center text-grey-2">
            Dernière mise à jour : 28 juillet 2025
          </p>
          <h1 className="font-heading text-5xl leading-none text-center">
            Politique de Confidentialité
          </h1>
          <p className="text-lg leading-normal text-center text-grey-2">
            Bienvenue sur Studio Podcast, un service proposé par Click2Cell.
            Nous attachons une grande importance à la confidentialité de vos
            données personnelles. Cette politique explique comment nous les
            collectons, les utilisons et les protégeons.
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">1 - Qui sommes-nous ?</h3>
          <p className="text-lg leading-normal text-grey-2">
            Studio Podcast est un site géré par Click2Cell, une société
            spécialisée dans la création digitale et les solutions web pour les
            créateurs de contenu.
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">2 - Données collectées</h3>
          <p className="text-lg leading-normal text-grey-2">
            Lorsque vous naviguez sur notre site, nous pouvons collecter les
            données suivantes :
          </p>
          <ContentList
            fontSizes="text-lg"
            description={`Données de navigation anonymes (via Google Analytics ou équivalent)`}
          />
          <ContentList
            fontSizes="text-lg"
            description={`Informations de contact si vous remplissez un formulaire (nom, e-mail, message)`}
          />
          <ContentList
            fontSizes="text-lg"
            description={`Données techniques (type d’appareil, navigateur)`}
          />
          <p className="text-lg leading-normal text-grey-2">
            Aucune donnée sensible n’est collectée sans votre consentement.
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">
            3 - Utilisation des données
          </h3>
          <p className="text-lg leading-normal text-grey-2">
            Vos données sont utilisées uniquement pour :
          </p>
          <ContentList
            fontSizes="text-lg"
            description={`Améliorer votre expérience utilisateur`}
          />
          <ContentList
            fontSizes="text-lg"
            description={`Répondre à vos demandes via le formulaire de contact`}
          />
          <ContentList
            fontSizes="text-lg"
            description={`Produire des statistiques d’utilisation anonymes`}
          />
          <p className="text-lg leading-normal text-grey-2">
            Nous ne revendons pas vos données.
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">4 - Cookies</h3>
          <p className="text-lg leading-normal text-grey-2">
            Le site peut utiliser des cookies pour améliorer la navigation et
            mesurer l’audience. Vous pouvez les refuser via les paramètres de
            votre navigateur.
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">5 - Stockage et sécurité</h3>
          <p className="text-lg leading-normal text-grey-2">
            Les données sont stockées de manière sécurisée sur des serveurs
            conformes aux normes européennes. Seules les personnes autorisées de
            Click2Cell peuvent y accéder.
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">6 - Vos droits</h3>
          <p className="text-lg leading-normal text-grey-2">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ContentList
            fontSizes="text-lg"
            description={`Accès à vos données`}
          />
          <ContentList
            fontSizes="text-lg"
            description={`Rectification ou suppression`}
          />
          <ContentList
            fontSizes="text-lg"
            description={`Opposition au traitement`}
          />
          <p className="text-lg leading-normal text-grey-2">
            Pour exercer ces droits, contactez-nous à :{" "}
            <a
              href="mailto:contact@click2cell.com"
              className="linkButton text-dark"
            >
              contact@click2cell.com
            </a>
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">7 - Contact</h3>
          <p className="text-lg leading-normal text-grey-2">
            Pour toute question sur cette politique, vous pouvez nous écrire à :{" "}
            <a
              href="mailto:contact@click2cell.com"
              className="linkButton text-dark"
            >
              contact@click2cell.com
            </a>
          </p>
          <p className="text-lg leading-normal text-grey-2">
            Paris Région Ile-de-France
            <br />2 rue des Chauffours - 95000 Cergy Pontoise
          </p>
          <p className="text-lg leading-normal text-grey-2">
            Clermont-Ferrand Région Auvergne-Rhône-Alpes
            <br />
            43 avenue de la Margeride - 63000 Clermont-Ferrand
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">Merci de votre confiance</h3>
          <p className="text-lg leading-normal text-grey-2">
            En utilisant Studio Podcast, vous acceptez cette politique de
            confidentialité. Nous nous engageons à la mettre à jour en cas de
            modification de nos pratiques.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PolitiqueConfPage;
