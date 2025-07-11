"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import styles from "./Header.module.css";
import LocationMenu from "./LocationMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
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
                <a href="/" className={`${styles.navLink} text-sm`}>
                  Trouver un studio
                </a>
                <button
                  onClick={toggleMenu}
                  className={`${styles.navLink} ${
                    isMenuOpen ? styles.active : ""
                  } text-sm`}
                >
                  Location studio
                  <Icon
                    icon="pixelarticons:chevron-down"
                    className={`${styles.navLinkIcon}`}
                  />
                </button>
                <a href="/" className={`${styles.navLink} text-sm`}>
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
      {isMenuOpen && <LocationMenu onOverlayClick={closeMenu} />}
    </>
  );
}
