"use client";

import { useState } from "react";
import IconPhoto from "../icons/IconPhoto";
import IconPodcast from "../icons/IconPodcast";
import IconVideo from "../icons/IconVideo";
import styles from "./Search.module.css";

interface StudiosSearchProps {
  onSearch: (studioType: string, city: string) => void;
}

export default function StudiosSearch({ onSearch }: StudiosSearchProps) {
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
    onSearch(selectedStudioType, selectedCity);
  };

  return (
    <div className="text-container gap-50">
      <h1 className="font-heading text-5xl leading-none text-center">
        Trouver un studio
      </h1>
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
  );
}
