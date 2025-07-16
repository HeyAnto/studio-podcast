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
            href="/location-studio/podcast"
            imageSrc="/images/type-studio/img-menu-podcast.png"
            imageAlt="Image Alt"
            title="Studio Podcast"
            description="Description"
            isActive={isActive("/location-studio/podcast")}
          />
          <MenuCard
            href="/location-studio/photo"
            imageSrc="/images/type-studio/img-menu-photo.png"
            imageAlt="Image Alt"
            title="Studio Photo"
            description="Description"
            isActive={isActive("/location-studio/photo")}
          />
          <MenuCard
            href="/location-studio/video"
            imageSrc="/images/type-studio/img-menu-video.png"
            imageAlt="Image Alt"
            title="Studio Vidéo"
            description="Description"
            isActive={isActive("/location-studio/video")}
          />
        </div>
      </div>
    </>
  );
}
