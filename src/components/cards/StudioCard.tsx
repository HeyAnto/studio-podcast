import IconLink from "../icons/IconLink";
import IconStar from "../icons/IconStar";
import styles from "./StudioCard.module.css";

interface Studio {
  id: string;
  title: string;
  description: string;
  rating: number;
  size: number;
  capacity: number;
  tag: string;
  city: string;
  image: string;
}

export default function StudioCard({ studio }: { studio: Studio }) {
  return (
    <a href="#" className={`${styles.card} flex flex-column rounded-6`}>
      <img src={studio.image} alt={studio.title} className={styles.cardCover} />
      <div className="flex flex-column p-20 gap-16">
        <div className="flex gap-16 justify-between">
          <h3 className="text-2xl text-green">{studio.title}</h3>
          <div className="linkIcon">
            <IconLink />
          </div>
        </div>

        <p className="text-sm text-grey">{studio.description}</p>

        <div className="flex items-center flex-wrap gap-8">
          <div className="flex items-center">
            <div className={styles.iconRating}>
              <IconStar />
            </div>
            <p className="text-sm">{studio.rating}</p>
          </div>
          <p className="text-sm">|</p>
          <p className="text-sm">{studio.size} m²</p>
          <p className="text-sm">|</p>
          <p className="text-sm">{studio.capacity} pers.</p>
        </div>

        <div className="flex flex-wrap gap-16">
          <div className={styles.cardTag}>
            <p className="text-sm text-green">{studio.tag}</p>
          </div>
          <div className={styles.cardTag}>
            <p className="text-sm text-green">{studio.city}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
