"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import IconChevronDown from "../icons/IconChevronDown";
import IconClose from "../icons/IconClose";
import IconMenu from "../icons/IconMenu";
import BurgerMenu from "./BurgerMenu";
import styles from "./Header.module.css";
import LocationMenu from "./LocationMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/studios") {
      return pathname.startsWith("/studios");
    }
    return pathname === href;
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
                <a
                  href="/studios/podcast/all"
                  className={`${styles.navLink} ${
                    isActive("/studios") ? styles.active : ""
                  } text-sm`}
                >
                  Trouver un Studio
                </a>
                <a
                  href="/location-studio"
                  className={`${styles.navLink} ${
                    isActive("/location-studio") ? styles.active : ""
                  } text-sm`}
                >
                  Location Studio
                </a>
                <button
                  onClick={toggleMenu}
                  className={`${styles.navLink} ${
                    isMenuOpen ? styles.active : ""
                  } text-sm`}
                >
                  Nos Studios
                  <div className={styles.navLinkIcon}>
                    <IconChevronDown />
                  </div>
                </button>
              </li>
            </ul>
          </nav>
          <a
            href="mailto:contact@studiopodcastexemple.com"
            className={`primaryButton text-base ${styles.contactButton}`}
          >
            Contactez-nous
          </a>
          <button
            className={`primaryButton ${styles.burgerButton}`}
            onClick={toggleBurgerMenu}
          >
            {isBurgerMenuOpen ? (
              <div className="linkIcon">
                <IconClose />
              </div>
            ) : (
              <div className="linkIcon">
                <IconMenu />
              </div>
            )}
          </button>
        </div>
      </header>
      {isMenuOpen && <LocationMenu onOverlayClick={closeMenu} />}
      {isBurgerMenuOpen && <BurgerMenu onClose={closeBurgerMenu} />}
    </>
  );
}
