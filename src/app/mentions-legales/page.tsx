import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Podcast",
  description:
    "Trouvez et louez votre studio d'enregistrement pour podcast, shooting photo ou production vidéo. Découvrez les meilleures adresses à Paris, Lyon, Marseille et plus encore.",
  robots: {
    index: false,
    follow: false,
    noarchive: false,
    nosnippet: false,
  },
};

const LegalPage = () => {
  return (
    <main className="gap-50">
      <section className="gap-50">
        <div className="text-container gap-16">
          <p className="text-sm text-center text-grey-2">
            Dernière mise à jour : 28 juillet 2025
          </p>
          <h1 className="font-heading text-5xl leading-none text-center">
            Mentions Légales
          </h1>
          <p className="text-lg leading-normal text-center text-grey-2">
            Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance
            dans l’économie numérique (LCEN).
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">1 - Éditeur du site</h3>
          <p className="text-lg leading-normal text-grey-2">
            <b>Nom du site :</b> Studio Podcast
            <br />
            <b>Propriétaire / Éditeur :</b> Click2Cell
            <br />
            <b>Siège social :</b> 43 Avenue de la Margeride – 63000
            Clermont-Ferrand
            <br />
            <b>Adresse e-mail :</b>{" "}
            <a
              href="mailto:contact@click2cell.com"
              className="linkButton text-dark"
            >
              contact@click2cell.com
            </a>
            <br />
            <b>Directeur de la publication :</b> Le représentant légal de
            Click2Cell
            <br />
            <b>Numéro de SIRET :</b> 50262985000038
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">2 - Hébergeur</h3>
          <p className="text-lg leading-normal text-grey-2">
            <b>Nom :</b> Vercel Inc.
            <br />
            <b>Adresse :</b> 440 N Barranca Ave #4133, Covina, CA 91723, USA
            <br />
            <b>Site web :</b>{" "}
            <a href="https://vercel.com" className="linkButton text-dark">
              https://vercel.com
            </a>
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">
            3 - Propriété intellectuelle
          </h3>
          <p className="text-lg leading-normal text-grey-2">
            L’ensemble des contenus présents sur le site Studio Podcast (textes,
            images, graphismes, logo, etc.) est la propriété exclusive de
            Click2Cell, sauf mention contraire.
            <br />
            Toute reproduction, représentation, diffusion ou exploitation sans
            autorisation préalable est interdite.
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">4 - Responsabilité</h3>
          <p className="text-lg leading-normal text-grey-2">
            Click2Cell s'efforce de fournir des informations exactes sur le
            site. Toutefois, nous ne pouvons garantir l'exactitude ou
            l’exhaustivité des contenus proposés.
            <br />
            L’utilisation du site se fait sous la seule responsabilité de
            l’utilisateur.
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">5 - Données personnelles</h3>
          <p className="text-lg leading-normal text-grey-2">
            Pour connaître nos engagements en matière de données personnelles,
            veuillez consulter notre{" "}
            <a
              href="/politique-de-confidentialite"
              className="linkButton text-dark"
            >
              Politique de Confidentialité
            </a>
            .
          </p>
        </div>

        <div className="text-container gap-16">
          <h3 className="text-2xl leading-normal">6 - Contact</h3>
          <p className="text-lg leading-normal text-grey-2">
            Pour toute question ou signalement :{" "}
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
      </section>
    </main>
  );
};

export default LegalPage;
