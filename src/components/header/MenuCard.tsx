import styles from "./Header.module.css";

export default function MenuCard({
  href = "/",
  imageSrc = "Image",
  imageAlt = "Image Alt",
  title = "Titre",
  description = "Description",
}) {
  return (
    <a className={styles.menuCard} href={href}>
      <img className={styles.cardImg} src={imageSrc} alt={imageAlt} />
      <div className="flex flex-column">
        <h3 className="text-base">{title}</h3>
        <p className="text-sm text-grey">{description}</p>
      </div>
    </a>
  );
}
