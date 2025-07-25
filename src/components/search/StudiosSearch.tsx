"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import IconPhoto from "../icons/IconPhoto";
import IconPodcast from "../icons/IconPodcast";
import IconVideo from "../icons/IconVideo";
import styles from "./Search.module.css";

interface StudiosSearchProps {
  onSearch: (studioType: string, city: string) => void;
  initialType?: string;
  initialCity?: string;
}

export default function StudiosSearch({
  onSearch,
  initialType = "Podcast",
  initialCity = "Paris",
}: StudiosSearchProps) {
  const [selectedStudioType, setSelectedStudioType] = useState(initialType);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const onSearchRef = useRef(onSearch);

  useEffect(() => {
    onSearchRef.current = onSearch;
  }, [onSearch]);

  const performSearch = useCallback((studioType: string, city: string) => {
    onSearchRef.current(studioType, city);
  }, []);

  useEffect(() => {
    setSelectedStudioType(initialType);
    setSelectedCity(initialCity);
    performSearch(initialType, initialCity);
  }, [initialType, initialCity, performSearch]);

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

  const handleStudioTypeClick = useCallback(
    (type: string) => {
      setSelectedStudioType(type);
      performSearch(type, selectedCity);
    },
    [selectedCity, performSearch]
  );

  const handleCityClick = useCallback(
    (city: string) => {
      setSelectedCity(city);
      performSearch(selectedStudioType, city);
    },
    [selectedStudioType, performSearch]
  );

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
    </div>
  );
}
