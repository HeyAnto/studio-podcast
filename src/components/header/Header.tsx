import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="/">
          <img
            className={styles.headerLogo}
            src="/studio-podcast-logo.svg"
            alt="Studio Podcast Logo"
          />
        </a>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/" className={`${styles.navLink} text-base`}>
                Location studio
              </a>
              <a href="/" className={`${styles.navLink} text-base`}>
                Nos studios
              </a>
            </li>
          </ul>
        </nav>
        <a href="/" className="primaryButton text-base">
          Contactez-nous
        </a>
      </div>
    </header>
  );
}
