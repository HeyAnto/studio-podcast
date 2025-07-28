import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className="flex flex-wrap justify-between">
          <img
            className={styles.footerLogo}
            src="/studio-podcast-logo.svg"
            alt="Studio Podcast Logo"
          />
          <nav className={styles.nav}>
            <ul>
              <li>
                <a className="linkButton" href="/politique-de-confidentialite">
                  Politique de confidentialité
                </a>
                <a className="linkButton" href="/mentions-legales">
                  Mentions légales
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-column no-gap">
          <p className="text-base">
            Studio Podcast © 2025 par{" "}
            <a
              className="linkButton"
              href="https://www.click2cell.com/"
              target="_blank"
            >
              Click2Cell
            </a>
          </p>
          <p className="text-sm text-grey-2">
            Design & développement réalisés par{" "}
            <a
              className="linkButton"
              href="https://www.linkedin.com/in/antoooo/"
              target="_blank"
            >
              Antonin SIOLY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
