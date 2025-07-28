import styles from "./Header.module.css";

interface BurgerMenuProps {
  onClose: () => void;
}

export default function BurgerMenu({ onClose }: BurgerMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div className={styles.burgerOverlay} onClick={onClose}></div>

      {/* Menu */}
      <div className={styles.burgerMenu}>
        <div className="flex flex-column">
          <a
            href="/studios/podcast/all"
            className={styles.burgerNavLink}
            onClick={onClose}
          >
            Trouver un Studio
          </a>
          <a
            href="/location-studio"
            className={styles.burgerNavLink}
            onClick={onClose}
          >
            Location Studio
          </a>
          <div className={`${styles.burgerNavLink} text-base`}>
            <p className="text-grey-2">Nos Studios</p>
            <a href="/location-studio/studio-podcast" onClick={onClose}>
              Studio Podcast
            </a>
            <a href="/location-studio/studio-photo" onClick={onClose}>
              Studio Photo
            </a>
            <a href="/location-studio/studio-video" onClick={onClose}>
              Studio Vidéo
            </a>
          </div>
          <a
            href="/politique-de-confidentialite"
            className={styles.burgerNavLink}
            onClick={onClose}
          >
            Politique de confidentialité
          </a>
          <a
            href="/mentions-legales"
            className={styles.burgerNavLink}
            onClick={onClose}
          >
            Mentions légales
          </a>
        </div>
        <a
          href="mailto:contact@studiopodcastexemple.com"
          className="primaryButton text-base"
          onClick={onClose}
        >
          Contactez-nous
        </a>
      </div>
    </>
  );
}
