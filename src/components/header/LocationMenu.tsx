import styles from "./Header.module.css";
import MenuCard from "./MenuCard";

interface HeaderMenuProps {
  onOverlayClick: () => void;
}

export default function HeaderMenu({ onOverlayClick }: HeaderMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div className={styles.overlay} onClick={onOverlayClick}></div>

      {/* Menu */}
      <div className={styles.headerMenu}>
        <div className={styles.menuContainer}>
          <MenuCard
            href="/"
            imageSrc="/images/type-studio/img-menu-podcast.png"
            imageAlt="Image Alt"
            title="Studio Podcast"
            description="Description"
          />
          <MenuCard
            href="/"
            imageSrc="/images/type-studio/img-menu-photo.png"
            imageAlt="Image Alt"
            title="Studio Photo"
            description="Description"
          />
          <MenuCard
            href="/"
            imageSrc="/images/type-studio/img-menu-video.png"
            imageAlt="Image Alt"
            title="Studio Vidéo"
            description="Description"
          />
        </div>
      </div>
    </>
  );
}
