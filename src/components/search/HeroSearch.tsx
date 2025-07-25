import IconPhoto from "../icons/IconPhoto";
import IconPodcast from "../icons/IconPodcast";
import IconVideo from "../icons/IconVideo";
import styles from "./Search.module.css";

export default function HeroSearch() {
  return (
    <div className={styles.heroSearch}>
      <div className={styles.heroSearchContainer}>
        <div className={styles.filterStudio}>
          <button className="filterStudioButton active">
            <div className="filterStudioIcon">
              <IconPodcast />
            </div>
            <p className="text-base">Podcast</p>
          </button>
          <button className="filterStudioButton">
            <div className="filterStudioIcon">
              <IconPhoto />
            </div>
            <p className="text-base">Photo</p>
          </button>
          <button className="filterStudioButton">
            <div className="filterStudioIcon">
              <IconVideo />
            </div>
            <p className="text-base">Vidéo</p>
          </button>
        </div>
        <div className={styles.filterCity}>
          <button className="filterCityButton active">
            <p className="text-3xl font-medium">Paris</p>
          </button>
          <button className="filterCityButton">
            <p className="text-3xl font-medium">Lyon</p>
          </button>
          <button className="filterCityButton">
            <p className="text-3xl font-medium">Marseille</p>
          </button>
          <button className="filterCityButton">
            <p className="text-3xl font-medium">Nantes</p>
          </button>
          <button className="filterCityButton">
            <p className="text-3xl font-medium">Clermont-Ferrand</p>
          </button>
          <button className="filterCityButton">
            <p className="text-3xl font-medium">Tout</p>
          </button>
        </div>
        <button className="secondaryButton">
          <p className="text-base">Démarrer votre recherche</p>
        </button>
      </div>
      <img
        src="/images/type-studio/img-home-podcast.webp"
        alt="Studio Podcast"
      />
    </div>
  );
}
