"use client";

import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import MenuCard from "./MenuCard";

interface HeaderMenuProps {
  onOverlayClick: () => void;
}

export default function HeaderMenu({ onOverlayClick }: HeaderMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <>
      {/* Overlay */}
      <div className={styles.overlay} onClick={onOverlayClick}></div>

      {/* Menu */}
      <div className={styles.headerMenu}>
        <div className={styles.menuContainer}>
          <MenuCard
            href="/location-studio/studio-podcast"
            imageSrc="/images/type-studio/img-menu-podcast.webp"
            imageAlt="Image Alt"
            title="Studio Podcast"
            description="Description"
            isActive={isActive("/location-studio/studio-podcast")}
          />
          <MenuCard
            href="/location-studio/studio-photo"
            imageSrc="/images/type-studio/img-menu-photo.webp"
            imageAlt="Image Alt"
            title="Studio Photo"
            description="Description"
            isActive={isActive("/location-studio/studio-photo")}
          />
          <MenuCard
            href="/location-studio/studio-video"
            imageSrc="/images/type-studio/img-menu-video.webp"
            imageAlt="Image Alt"
            title="Studio Vidéo"
            description="Description"
            isActive={isActive("/location-studio/studio-video")}
          />
        </div>
      </div>
    </>
  );
}
