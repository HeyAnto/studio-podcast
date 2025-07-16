import styles from "./Header.module.css";

interface MenuCardProps {
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  isActive?: boolean;
}

export default function MenuCard({
  href = "/",
  imageSrc = "Image",
  imageAlt = "Image Alt",
  title = "Titre",
  description = "Description",
  isActive = false,
}: MenuCardProps) {
  return (
    <a
      className={`${styles.menuCard} ${isActive ? styles.active : ""}`}
      href={href}
    >
      <img className={styles.cardImg} src={imageSrc} alt={imageAlt} />
      <div className="flex flex-column">
        <h3 className="text-base">{title}</h3>
        <p className="text-sm text-grey">{description}</p>
      </div>
    </a>
  );
}
