"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import IconChevronDown from "../icons/IconChevronDown";
import styles from "./Header.module.css";
import LocationMenu from "./LocationMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
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
                  href="/location-studio"
                  className={`${styles.navLink} ${
                    isActive("/location-studio") ? styles.active : ""
                  } text-sm`}
                >
                  Trouver un studio
                </a>
                <button
                  onClick={toggleMenu}
                  className={`${styles.navLink} ${
                    isMenuOpen ? styles.active : ""
                  } text-sm`}
                >
                  Location studio
                  <div className={styles.navLinkIcon}>
                    <IconChevronDown />
                  </div>
                </button>
                <a
                  href="/studios"
                  className={`${styles.navLink} ${
                    isActive("/studios") ? styles.active : ""
                  } text-sm`}
                >
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
