"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import IconPhoto from "../icons/IconPhoto";
import IconPodcast from "../icons/IconPodcast";
import IconVideo from "../icons/IconVideo";
import styles from "./Search.module.css";

export default function HeroSearch() {
  const router = useRouter();
  const [selectedStudioType, setSelectedStudioType] = useState("Podcast");
  const [selectedCity, setSelectedCity] = useState("Paris");

  const studioTypes = [
    { type: "Podcast", icon: <IconPodcast /> },
    { type: "Photo", icon: <IconPhoto /> },
    { type: "Vidéo", icon: <IconVideo /> },
  ];

  const cities = [
    "Paris",
    "Lyon",
    "Marseille",
    "Nantes",
    "Clermont-Ferrand",
    "Tout",
  ];

  const handleStudioTypeClick = (type: string) => {
    setSelectedStudioType(type);
  };

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
  };

  const handleSearch = () => {
    let urlType =
      selectedStudioType === "Tout" ? "all" : selectedStudioType.toLowerCase();
    let urlCity = selectedCity === "Tout" ? "all" : selectedCity.toLowerCase();

    if (urlType === "vidéo") {
      urlType = "video";
    }

    if (urlCity === "clermont-ferrand") {
      urlCity = "clermont-fd";
    }

    router.push(`/studios/${urlType}/${urlCity}`);
  };

  const getImageSrc = () => {
    switch (selectedStudioType) {
      case "Photo":
        return "/images/type-studio/img-home-photo.webp";
      case "Vidéo":
        return "/images/type-studio/img-home-video.webp";
      case "Podcast":
      default:
        return "/images/type-studio/img-home-podcast.webp";
    }
  };

  return (
    <div className={styles.heroSearch}>
      <div className={styles.heroSearchContainer}>
        <div className={styles.filterStudio}>
          {studioTypes.map((studio) => (
            <button
              key={studio.type}
              className={`filterStudioButton ${
                selectedStudioType === studio.type ? "active" : ""
              }`}
              onClick={() => handleStudioTypeClick(studio.type)}
            >
              <div className="filterStudioIcon">{studio.icon}</div>
              <p className="text-base">{studio.type}</p>
            </button>
          ))}
        </div>
        <div className={styles.filterCity}>
          {cities.map((city) => (
            <button
              key={city}
              className={`filterCityButton ${
                selectedCity === city ? "active" : ""
              }`}
              onClick={() => handleCityClick(city)}
            >
              <p className="text-3xl font-medium">{city}</p>
            </button>
          ))}
        </div>
        <button className="secondaryButton" onClick={handleSearch}>
          <p className="text-base">Démarrer votre recherche</p>
        </button>
      </div>
      <img src={getImageSrc()} alt={`Studio ${selectedStudioType}`} />
    </div>
  );
}
